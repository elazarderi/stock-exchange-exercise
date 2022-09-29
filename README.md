# Stock Exchange Exercise
## Server Side

Backend side written in nodejs v14.17.5

## Get Startted
Clone this repository and then install the packages use:
```sh
npm i
```
Then make sure that the database are exist.
you can find the db connection details at *config* directory (except the password that in *.env* file).

Create *.env* file and fill it according to *.env.example* file, the details will provided sparately.

**If the database aren't exist follow the steps to create the database!**

## Database Creation
- Create new database in one of the relevant platform. I uses [db4free.net] or [freesqldatabase] (use temp mail, don't be child).
- Update the connection data at *config* file.
- Create *.env* file with the password (use *.env.example* stracture).
- Create the database stracture by running the server once useing the command `connection.sync({ force: true })`. The source code is in *src -> index.ts, row 22*
(run the server with this command only once! after one running return the code to original state).
- Run all commands that in *src -> db -> ddl.sql*.

For running the server use: 
```sh
npm start
```

Thats it. 
If there are any problems contact with the developer.

[db4free.net]: <https://www.db4free.net/signup.php>
[freesqldatabase]: <https://www.freesqldatabase.com/register>