const router = require("express").Router();

// Base Route
router.get('/', (_, res) => {
    res.send("Project Manager ~ Ehab Sohail");
});

require("./projectRoutes")(router);
require("./issueRoutes")(router);
require("./taskRoutes")(router);
require("./userRoutes")(router);
require("./announcementRoutes")(router);

// 404 Route
router.all('*', (req, res) => {
    res.status(404).json({
        status: 404,
        method: req.method,
        message: '404 Not Found',
    });
});

module.exports = router;