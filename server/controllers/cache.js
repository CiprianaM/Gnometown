
const NodeCache = require( "node-cache" );
const myCache = new NodeCache({useClones: false});

exports.getAllGnomes = async(req, res) => {
  const keys = await myCache.keys();
  const gnomes = await myCache.mget(keys);
  res.json(gnomes);
}

exports.cacheAllGnomes = async(req, res) => {
  myCache.flushAll();
  const gnomes = await myCache.mset(req.body);
  res.status(201);
  res.send(gnomes);
}

exports.createTopic = async (req,res) => {
  const topic = await topics.createOneTopic(req.body);
  res.status(201);
  res.json(topic);
};