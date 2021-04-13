const request = require('supertest');

const config = require('./config');

const user = () => {
  request(config.API_URL)
    .get(config.USER_URL)
    .expect(200)
    .end((err, res) => {
      console.log('PASSED');
      if (err) {
        console.log('FAILED');
        throw err;
      }
    });
};

const auth = () => {
  request(config.API_URL)
    .get(config.AUTH_URL)
    .expect(401)
    .end((err, res) => {
      console.log('PASSED');
      if (err) {
        console.log('FAILED');
        throw err;
      }
    });
};

const getProjects = () => {
  request(config.API_URL)
    .get(config.PROJECTS_URL)
    .expect(200)
    .end((err, res) => {
      console.log('PASSED');
      if (err) {
        console.log('FAILED');
        throw err;
      }
    });
};

const followProject = () => {
  request(config.API_URL)
    .post(config.PROJECTS_FOLLOW)
    .expect(200)
    .end((err, res) => {
      console.log('PASSED');
      if (err) {
        console.log('FAILED');
        throw err;
      }
    });
};

module.exports = {
  user,
  auth,
  getProjects,
  followProject,
};
