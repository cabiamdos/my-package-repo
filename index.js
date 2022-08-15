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


// ---
// to create a new branch use 'git branch nameOfBranch'
// 'npm i ci' will install the exact version of the packages of the 'package-lock.json' of a project

// in general when a package has not a explicit license most organizations avoid to use it. to prevent potential legal risks
// there are more than 200 open source license
// GNU (GPL)
// The Apachie License
// Berkeley Software Distribution (BSD)
// MIT License

// +how to choose?
// read contracts
// verify your dependencies
// choosealicense.com

// when you create a 'new file', 'add file', and type LICENSE.md as the name, github will recognize it as a license and will give you an option to choose from different licenses.

// REMOVING A PACKAGE
// if we want to publish
// npm publish

// if we want to unpublish
// npm unpublish
// but it won't work on a package uploaded with github
// so we need to go o the github page where the package is seleted>settings>manage-versions>delete all the versions you want to rmeove
// and remove it
// to remove the whole package you need to go to options and click on remove

// to restore you need to go to settings>package and you will find the package you just removed
// just click on 'restore' and confirm the name
