# PowerDashboard

This is not stable yet.  Everything here is subject to change.  

Nodejs web server that will run PowerShell scripts for you.  This was a tool I was building to help support my team with more code first approach in a windows environment.  

## Features

* Web Service to act as a central location to run scripts.
* Enables team members who might not be into scripting to be able to help with running scripts made by the team.
* Central repo of all the scripts that have been made for the team.
* Rest API to allow external services to kick off tasks.

## Requrements

1. Install the current Node LTS version for your OS. [nodejs](https://nodejs.org/en/download/)
2. If you are on Linux or OSX make sure you install PowerShell Core.  Make sure you install a stable build.  6.1 was stable at the time of writing this. [PowerShell Releases](https://github.com/PowerShell/PowerShell/releases)
3. If you are on Windows, you can use the built-in version or Core.

## Install

Download the source.
Extract source to a folder
Open a terminal and navigate to the folder.
run 'npm install'  this will install node modules
run 'npm run SQL' this will generate the DB for you.
run 'npm run sass' this will generate the sites CSS file.
run 'npm run start' to turn on the service.

Once you have everything generated from the scripts you will just need to run npm run start.

## New Scripts

Add your .ps1 file to the scripts folder.
Open scripts.js in a text editor.


