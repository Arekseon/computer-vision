# Github Documentation

## Prerequisites
* Install Git on your local machine
* Have a GitHub account
* Request to be added to the repository as a collaborator (alternatively you may prefer to `fork` the repository).
* Ensure you have cloned the remote repository into a local machine.
* Make sure you have local access to the following branches:
  * master
  * dev
* Set up a local development branch using whichever naming convention works best for you (e.g., sm-test, sm-dev, sm-experimental, etc...)

## Workflow
  "Commit Early. Commit Often"
  
  It is important to make note of this saying at the start. This should really be everyones mantra when it comes to working with Git/GitHub as any deviation will often result in poor documentation, poor version control, and more importantly, merge conflicts"
 
  The reasoning behind this will become more apparent as you fully embrace Git, but I'll point a few things out for now that hopefully will make sense.
  
  1. 



## Command-Line Cheatsheet
* ```git clone https://github.com/scotmatson/computer-vision.git``` - Will make a local copy of a remote repository. The top-level directory will be named after the repository, in this case `computer-vision`. When cloning from a repository a remote link will be made with the github repository which you cloned and is called `origin`, your default local branch is called `master` by convention.
* ```git remote``` - Displays the alias of all remote repositories.
* ```git status``` - Displays the current state of the local repository. Files will displayed as being one of the following:
  * Untracked - A new file that is not yet part of the current repository
  * Unstaged - An existing file that has been modified but is not `staged` for commit.
  * Staged - A modified file that has been `staged` to be commited to the repository
* ```git add [filename.ext]``` - Will `stage` a specified file for commit.
* ```git add --all :/``` - Will `stage` all modified/untracked files for commit.
* ```git commit -m "[Commit Message]"``` - This will commit all staged changes into your `local` repository. The files being commited will all share the same timestamp and message so it is important that you commit frequently so that your commit history and commit messages make sense (i.e., messages should be succinct)

* ```git push [remote repository alias] [local branch]``` - This is how you update the remote repository. The remote alias referencing the remote repository you wish to push the changes to, you may have multiple registered remote repositories, but in most cases it will simply be `origin`. The local branch referes to the current branch of the repository you are working on. If the `local branch` does not yet exist in the remote repository, it will be created after `pushing`.
  
  Examples:
  
    *```git push origin dev```
    *```git push origin sm-experimental```

## Terminology
* Git - A version control system (VCS) which is ran locally on your machine.
* Github - A cloud hosted VCS based on Git.
* Local - Refers to your `local` git repository
* Remote - Refers to to the `remote` Github repository
* Stage - When a file or files are `staged`, they are able to be commited. A modified file is in either one of two states, staged or unstaged. If a file is not staged, it cannot be commited to the repository.
* Tracking - A file OR change that is tracked is one that has been commited to the repository. Each time a commit is made a new snapshot is taken of the current state of all tracked files.