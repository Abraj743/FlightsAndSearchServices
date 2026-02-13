# Welcome to Flights Service


## Project Setup
 - clone the project on your local
 - Execut `npm install` on the same path as of your root directory of the downloaded project
 - Create .env file in the root directory and the following environment variable
       - `PORT=3000`
 - Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

 ```
 {
  "development": {
    "username": "YOUR_DB_LOGIN_NAME",
    "password": "<YOUR DB PASSWORD>",
    "database": "flights_search_db_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

 ```
