class User {
  constructor() {
    this.message = 'Hello World';
    console.log(this.message);
  }

  getUserName() {}

  getUserStatus() {}
}

module.exports = User;

// first run 'npm init -y'
// then go to github> setting> generate a new token> save it here
// then in github go and create new repository (make it public)
// then go to the terminal and type 'npm i', it will create the package-lock.json
//
