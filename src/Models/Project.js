export default class Project {
    constructor(id, title, description, createdAt, lastUpdated, deadline, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.lastUpdated = lastUpdated ?? createdAt;
        this.deadline = deadline;
        this.status = status;
    }

    static fromJson(json) {
        return new Project(
            json.id,
            json.title,
            json.description,
            json.createdAt,
            json.lastUpdated,
            json.deadline,
            json.status
        );
    }
}

const projectConverter = {
    toFirestore: (project) => {
        return {
            title: project.title,
            description: project.description,
            createdAt: project.createdAt,
            lastUpdated: project.lastUpdated,
            deadline: project.deadline,
            status: project.status,
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Project(
            snapshot.id,
            data.title,
            data.description,
            data.createdAt,
            data.lastUpdated,
            data.deadline,
            data.status
        );
    },
}