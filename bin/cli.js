#!/usr/bin/env node

const {execSync} = require('child_process');

const runCommand = command => {
    try{
        execSync(`${command}`, {stdio: 'inherit'});
    }
    catch(err){
        console.error(`Failed to execute ${command}`, err);
        return false;
    }
    return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/dor1202/custom-react-starter-ts ${repoName}`;
const removeGitCommand = `cd ${repoName} && rm -rf .git`;
const removeBinCommand = `rm -r ${repoName}/bin`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut)process.exit(-1);

console.log(`Removing git from ${repoName}`);
const removeGit = runCommand(removeGitCommand);
if(!removeGit)process.exit(-1);

console.log(`Removing bin folder from ${repoName}`);
const removeBin = runCommand(removeBinCommand);
if(!removeBin)process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if(!installedDeps)process.exit(-1);

console.log(`Congrats! You'r ready to start coding`);