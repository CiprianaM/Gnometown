const router = require('express').Router();

const cache = require('./controllers/cache');


router.get('/all', cache.getAllGnomes);
router.post('/all', cache.cacheAllGnomes);

module.exports = router;
