const announcementController = require('../controllers/announcementController');

module.exports = (router) => {

/* ********** Mutation ********** */
  router.post("/announcement", announcementController.createAnnouncement);

/* ********** Query ********** */
  router.get("/announcement/:id", announcementController.getAnnouncement);
  router.get("/project/:pid/announcements", announcementController.getAnnouncementsForProject);
  router.get("/announcement/:id/comments", announcementController.getCommentsForAnnouncement);
  router.get("/project/:pid/announcementCount", announcementController.getAnnouncementCountForProject);
};