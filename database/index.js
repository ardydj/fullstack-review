const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  repoName: String,
  userName: String,
  forkCount: Number

});

let Repo = mongoose.model('Repo', repoSchema);

// const helloWorld = new Repo({id: 4444});

let save = (repo) => {
  // TODO: Your code here

  repo.save((err, repo) => {
    if (err) {
      console.error(err);
    }
    console.log('repo saved successfully')
  });
  // This function should save a repo or repos to
  // the MongoDB
}

// save(err, helloWorld)

module.exports.save = save;