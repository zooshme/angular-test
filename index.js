const {send, buffer, text, json} = require('micro');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const path = require('path');
const url = 'mongodb://zooshme:ovi1982aug@ds127375.mlab.com:27375/cakes';

function connect(callback) {
  MongoClient.connect(url, callback);
}

module.exports = async (req, res) => {
  console.log(req.url)
  if (req.method === 'GET' && req.url.match(/\.(jpeg|jpg|gif|ico|png|css|js|svg)$/)) {
    let filePath = path.join(__dirname, 'assets', req.url);
    if (fs.existsSync(filePath)) {
      res.end(fs.readFileSync(filePath));
    }
  } else if (req.method === 'GET' && (req.url.match(/^\/$/) || req.url.match(/^\/(?!api\/)[a-zA-Z0-9\/]+$/))) {
    res.end(fs.readFileSync(path.join(__dirname, 'pages/index.html')));
  } else if (req.method === 'GET' && req.url.match(/^\/favicon.ico\/?$/)) {
    fs.readFile('./assets/images/favicon.ico');
  } else if (req.method === 'GET' && req.url.match(/^\/api\/cakes\/?$/i)) {
    connect((err, db) => {
      const collection = db.collection('cakes');
      collection.find({}).toArray((err, docs) => {
        if (err === null) {
          send(res, 200, {cakes: docs});
        }
        db.close();
      });
    });
  } else if (req.method === 'GET' && req.url.match(/^\/api\/cakes\/[a-zA-Z0-9]{24}\/?$/i)) {
    let id = /^\/api\/cakes\/([a-zA-Z0-9]+)\/?$/i.exec(req.url)[1];
    connect((err, db) => {
      const collection = db.collection('cakes');
      collection.findOne({_id: ObjectId(id)}, function(err, item) {
        if (err === null) {
          send(res, 200, item);
        }
        db.close();
      })
    })
  } else if (req.method === 'POST' && req.url.match(/^\/api\/cakes\/?$/i)) {
    let cake = await json(req);
    console.log(cake);
    connect((err, db) => {
      let collection = db.collection('cakes');
      collection.insertOne(cake, (err, doc) => {
        if (err === null) {
          send(res, 200, cake);
        }
        db.close();
      });
    });
  } else if (req.method === 'PUT' && req.url.match(/^\/api\/cakes\/[a-zA-Z0-9]{24}\/?$/i)) {
    let cake = await json(req);
    let {_id, imageUrl, name, comment, yumFactor} = cake;
    connect((err, db) => {
      let collection = db.collection('cakes');
      collection.updateOne({_id: ObjectId(cake._id)}, {$set: {_id: ObjectId(_id), imageUrl, name, comment, yumFactor}}, function(err, doc) {
        if (err === null) {
          send(res, 204);
        }
        db.close()
      })
    })
  } else if (req.method === 'DELETE' && req.url.match(/^\/api\/cakes\/[a-zA-Z0-9]{24}\/?$/i)) {
    let id = /^\/api\/cakes\/([a-zA-Z0-9]{24})\/?$/i.exec(req.url)[1]
    connect((err, db) => {
      let collection = db.collection('cakes');
      collection.deleteOne({_id: ObjectId(id)}, (err, item) => {
        if (err === null) {
          send(res, 204);
        }
        db.close();
      });
    });

  } else {
    send(res, 404, 'page not found');
  }
}
