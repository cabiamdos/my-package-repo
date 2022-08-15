class User {
  constructor() {
    this.username;
    this.message = 'Hello World';
    console.log(this.message);
  }

  getUserName() {
    return this.username;
  }

  getUserStatus() {}
}

module.exports = User;

// first run 'npm init -y'
// then go to github> setting> generate a new token> save it here
// myToken (no expiration): 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
// then in github go and create new repository (make it public)
// then go to the terminal and type 'npm i', it will create the package-lock.json
// then initialize the package 'git init'
// add all files 'git add .'
// make a commit 'git -m 'first commit''
// 'git branch -M main' to add it to the main branch

// finally we need to assign the remote address of our repo.
// git remote add origin https://github.com/cabiamdos/my-package-repo.git

// finally we need to send all the changes
// git push -u origin [name of the branch]
// git push -u origin main

// --------

// we created also a file called .npmrc


// asdfasdf

// we run 'npm publish' to publish to npm repository
// if after changing the code we want to publish the new code, we will get an error
// this is because in the package.json we need to change and update a new version

// now we can install our package using the following command
// npm install @cabiamdos/my-package@1.0.1

// to import: import myPackage from '@cabiamdos/my-package@1.0.1'

// after configuring page section in the settings of the project
// and there will be the link https://cabiamdos.github.io/my-package-repo/
