const announcementController = require('../controllers/announcementController');

module.exports = (router) => {

    // TODO /* ********** Mutation ********** */

/* ********** Query ********** */
  router.get("/announcement/:id", announcementController.getAnnouncement);
  router.get("/project/:pid/announcements", announcementController.getAnnouncementsForProject);
  router.get("/announcement/:id/comments", announcementController.getCommentsForAnnouncement);
  router.get("/project/:pid/announcementCount", announcementController.getAnnouncementCountForProject);
};