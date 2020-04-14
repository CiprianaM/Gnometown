
const NodeCache = require( "node-cache" );
const myCache = new NodeCache({useClones: false});

// exports.getAllUsers = async (req, res) => {
//   const users = await myUserModel.findAll();
//   res.json(users);
// };

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
  // console.log(req.body);
  const topic = await topics.createOneTopic(req.body);
  res.status(201);
  res.json(topic);
};