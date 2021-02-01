# Getting Started with this project

## Local DB setup

We're going to be using PostgreSQL for the project so you will want to get that set up locally on your machine.
To get it set up, click on this [link](https://www.postgresqltutorial.com/install-postgresql/). This will take you to the install site for Windows. If your computer has a different OS, there are links on that page to take you to the appropriate place.

Follow the steps of the wizard. Use port `5432` when asked, and don't worry about installing the Stack Builder stuff.

This wizard will setup a user under the account name `postgres`. When you are asked to give a password, be sure to give it `supersecret`. This is just going to be the password for your local development

`ALTER ROLE username PASSWORD 'newpassword'`
