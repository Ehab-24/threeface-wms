const { faker } = require("@faker-js/faker");

const User = require("../models/User");
const Project = require("../models/Project");
const Task = require("../models/Task");
const Announcement = require("../models/Announcement");
const Issue = require("../models/Issue");

const USER_COUNT = 100;
const PROJECT_COUNT = 320;
const MIN_ASSIGNEES_PER_PROJECT = 2;
const MAX_ASSIGNEES_PER_PROJECT = 10;
const MIN_ASSIGNEES_PER_TASK = 0;
const MAX_ASSIGNEES_PER_TASK = 8;
const MIN_TASKS_PER_PROJECT = 4;
const MAX_TASKS_PER_PROJECT = 32;
const MIN_ANNOUNCEMENTS_PER_PROJECT = 2;
const MAX_ANNOUNCEMENTS_PER_PROJECT = 16;
const MIN_COMMENTS = 2;
const MAX_COMMENTS = 16;


const generateUserData = () => {
  const users = [];
  for (let i = 0; i < USER_COUNT; i++) {
    const fname = faker.name.firstName();
    const lname = faker.name.lastName();
    users.push({
      name: `${fname} ${lname}`,
      email: faker.internet.email(fname, lname),
      password: faker.internet.password(),
      imageUrl: faker.image.image(),
      projects: [],
    });
  }

  return users;
};

const generateProjectData = (users) => {
  const projectData = [];

  for (let i = 0; i < PROJECT_COUNT; i++) {
    const owner = faker.helpers.arrayElement(users);
    projectData.push({
      ownerId: owner._id,
      title: faker.lorem.slug(),
      description: faker.lorem.paragraph(),
      status: faker.helpers.arrayElement(["active", "paused", "closed"]),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      dueAt: faker.date.soon(),
      assignees: [{}]
    });
    projectData[i].assignees.pop();

    const numAssignees = faker.datatype.number({ min: MIN_ASSIGNEES_PER_PROJECT, max: MAX_ASSIGNEES_PER_PROJECT });
    for (let j = 0; j < numAssignees; j++) {
      const user = faker.helpers.arrayElement(users);

      // if user is already assigned to this project or is owner, skip
      if (
        projectData[i].assignees.some(
          (assignee) => assignee.uid === user._id || user._id === owner._id
        )
      ) {
        continue;
      }

      projectData[i].assignees.push({
        uid: user._id,
        name: user.name,
        role: faker.helpers.arrayElement(["admin", "write", "read"]),
        imageUrl: user.imageUrl,
      });
    }
  }

  return projectData;
};

const generateCommentData = (owners, parentId, refCollection) => {
  const comments = [];

  for(let i = 0 ; i < faker.datatype.number({ min: MIN_COMMENTS, max: MAX_COMMENTS }); i++) {
    const owner = faker.helpers.arrayElement(owners);
    comments.push({
      parent: {
        id: parentId,
        ref: refCollection,
      },
      owner: {
        uid: owner.uid,
        name: owner.name,
      },
      text: faker.lorem.paragraph(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.past(),
    });
  }
  return comments;
}

const generateTasks = async (users, projects) => {
  
  for (let i = 0; i < PROJECT_COUNT; i++) {
    const taskData = [];

    // Only project Owner and users that are assigned to the projects[i] can create tasks
    let projectAssignees = projects[i].assignees.filter(
      (assignee) => assignee.role !== "read"
    );
    projectAssignees = projects[i].assignees.map((assignee) => {
      return {
        uid: assignee.uid,
        name: assignee.name,
      };
    });

    const projectOwner = users.find((user) => user._id === projects[i].ownerId);
    projectAssignees.push({
      uid: projectOwner._id,
      name: projectOwner.name,
    });

    // Create tasks for current project
    for (let j = 0; j < faker.datatype.number({ min: MIN_TASKS_PER_PROJECT, max: MAX_TASKS_PER_PROJECT }); j++) {
      const taskOwner = faker.helpers.arrayElement(projectAssignees);
      taskData.push({
        owner: {
          uid: taskOwner.uid,
          name: taskOwner.name,
        },
        projectId: projects[i]._id,
        title: faker.lorem.slug(),
        description: faker.lorem.paragraph(),
        status: faker.helpers.arrayElement([
          "completed",
          "in progress",
          "todo",
          "cancelled",
          "planning",
        ]),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        dueAt: faker.date.soon(),
        assignees: [],
        comments: []
      });
      
      // Assignees for current task
      const numAssignees = faker.datatype.number({ min: MIN_ASSIGNEES_PER_TASK, max: MAX_ASSIGNEES_PER_TASK });
      for (let k = 0; k < numAssignees; k++) {
        const user = faker.helpers.arrayElement(users);

        // if user is already assigned to this task or is owner, skip
        if (
          taskData[j].assignees.some(
            (assignee) => assignee.uid === user._id || user._id === taskOwner.uid
          )
        ) {
          continue;
        }

        taskData[j].assignees.push({
          uid: user._id,
          name: user.name,
          role: faker.helpers.arrayElement(["admin", "write", "read"]),
          imageUrl: user.imageUrl,
        });
      }
    }
    const tasks = await Task.insertMany(taskData);

    // Create comments for each task of current project
    for (let j = 0; j < tasks.length; j++) {
      const comments = generateCommentData(projectAssignees, tasks[j]._id, "tasks");
      tasks[j].comments = comments;
      await tasks[j].save();
    }
  }
};

const generateAnnouncements = async (users, projects) => {
  
  for(let i = 0; i < PROJECT_COUNT; i++) {
    const announcementData = [];

    // Only project Owner and users that are assigned to the projects[i] can create announcements
    let projectAssignees = projects[i].assignees.filter(
      (assignee) => assignee.role !== "read"
    );
    projectAssignees = projects[i].assignees.map((assignee) => {
      return {
        uid: assignee.uid,
        name: assignee.name,
      };
    });

    const projectOwner = users.find((user) => user._id === projects[i].ownerId);
    projectAssignees.push({
      uid: projectOwner._id,
      name: projectOwner.name,
    });

    // Create announcements for current project
    for (let j = 0; j < faker.datatype.number({ min: MIN_ANNOUNCEMENTS_PER_PROJECT, max: MAX_ANNOUNCEMENTS_PER_PROJECT }); j++) {
      const announcementOwner = faker.helpers.arrayElement(projectAssignees);
      announcementData.push({
        owner: {
          uid: announcementOwner.uid,
          name: announcementOwner.name,
        },
        projectId: projects[i]._id,
        text: faker.lorem.paragraph(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        comments: []
      });
    }

    const announcements = await Announcement.insertMany(announcementData);

    // Create comments for each announcement of current project
    for (let j = 0; j < announcements.length; j++) {
      const comments = generateCommentData(projectAssignees, announcements[j]._id, "announcements");
      announcements[j].comments = comments;
      await announcements[j].save();
    }
  }
};

const generateIssues = async (users, projects) => {
  
  for (let i = 0; i < PROJECT_COUNT; i++) {
    const issueData = [];

    // Only project Owner and users that are assigned to the projects[i] can create tasks
    let projectAssignees = projects[i].assignees.filter(
      (assignee) => assignee.role !== "read"
    );
    projectAssignees = projects[i].assignees.map((assignee) => {
      return {
        uid: assignee.uid,
        name: assignee.name,
      };
    });

    const projectOwner = users.find((user) => user._id === projects[i].ownerId);
    projectAssignees.push({
      uid: projectOwner._id,
      name: projectOwner.name,
    });

    // Create tasks for current project
    for (let j = 0; j < faker.datatype.number({ min: MIN_TASKS_PER_PROJECT, max: MAX_TASKS_PER_PROJECT }); j++) {
      const issueOwner = faker.helpers.arrayElement(projectAssignees);
      issueData.push({
        owner: {
          uid: issueOwner.uid,
          name: issueOwner.name,
        },
        projectId: projects[i]._id,
        title: faker.lorem.slug(),
        description: faker.lorem.paragraph(),
        status: faker.helpers.arrayElement([
          "active",
          "resolved",
          "closed",
        ]),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        assignees: [],
        comments: []
      });
      
      // Assignees for current issue
      const numAssignees = faker.datatype.number({ min: MIN_ASSIGNEES_PER_TASK, max: MAX_ASSIGNEES_PER_TASK });
      for (let k = 0; k < numAssignees; k++) {
        const user = faker.helpers.arrayElement(users);

        // if user is already assigned to this task or is owner, skip
        if (
          issueData[j].assignees.some(
            (assignee) => assignee.uid === user._id || user._id === issueOwner.uid
          )
        ) {
          continue;
        }

        issueData[j].assignees.push({
          uid: user._id,
          name: user.name,
          role: faker.helpers.arrayElement(["admin", "write", "read"]),
          imageUrl: user.imageUrl,
        });
      }
    }
    const issues = await Issue.insertMany(issueData);

    // Create comments for each task of current project
    for (let j = 0; j < issues.length; j++) {
      const comments = generateCommentData(projectAssignees, issues[j]._id, "issues");
      issues[j].comments = comments;
      await issues[j].save();
    }
  }
}


const seed = async () => {
  const usersData = generateUserData();
  const users = await User.insertMany(usersData);

  console.log("✅  Users generated...");

  const projectData = generateProjectData(users);
  const projects = await Project.insertMany(projectData);
  console.log("✅  Projects generated...");

  await generateTasks(users, projects);
  console.log("✅  Tasks generated...");

  await generateAnnouncements(users, projects);
  console.log("✅  Announcements generated...");

  await generateIssues(users, projects);
  console.log("✅  Issues generated...");

  console.log("Database seeded successfully 👍");
};

module.exports = seed;
