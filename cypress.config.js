const { defineConfig } = require("cypress");
const sql = require("mssql");
const mysql = require("mysql");
const { Client } = require('pg')


function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      module.exports = (on, config) => {

        
      };
      on("task", {
        queryDb: query => {
          return queryTestDb(query, config);
        }
      });
      // on('task', {
      //   async sqlfind(query) {
      //     try {
      //       await sql.connect('Server=rds-mysql-dev.cthmgrr1ivew.ap-southeast-1.rds.amazonaws.com,3306;Database=princmapidb-qa;User Id=princmapiuser;Password=TaaTC9uM;Encrypt=true;Trusted_Connection=True;TrustServerCertificate=True;')
      //       const result = await sql.query(`${query}`)
      //       // response  = res.json(result.recordset);
      //       return result.recordset;
      //     } catch (err) {
      //       return err;
      //     }
      //   }
      // });
      const urls = {
        stg: "https://www.facebook.com",
        uat: "https://sit-eregistration.cfwplatform.com/v1.5/w-app/registration?token=70d2422c-bb7a-4b62-978e-80ea4e897eb6",
        api: "https://www.melivecode.com/api"
      }
      config.baseUrl = urls[config.env.run_env]
      return config
      
    },
    // baseUrl: "https://sit-eregistration.cfwplatform.com/v1.5/w-app/registration?token=70d2422c-bb7a-4b62-978e-80ea4e897eb6" ,
    specPattern: "cypress/e2e/*.{js,jsx,ts,tsx}" ,
    defaultCommandTimeout: 10000,
    "env":{
      "db": {
      "host": "rds-mysql-dev.cthmgrr1ivew.ap-southeast-1.rds.amazonaws.com",
      "user": "princmapiuser",
      "password": "TaaTC9uM",
      "database" : "princmapidb-qa"

    }
    }
 
  },
  viewportWidth: 1000,
  viewportHeight: 800,
  screenshotOnRunFailure: true,
  screenshotsFolder:'cypress/reports/screenshots',
  videosFolder : 'cypress/reports/video' ,
  video : true ,
  // reporter: 'mochawesome',
  // reporterOptions: {
  // reportDir: 'cypress/reports',
  // reportFilename: '[name].html',
  // charts: true,
  // overwrite: true,
  // html: true,
  // json: true,
  // reportPageTitle: "Princ Test Report",
  // embeddedScreenshots: true,
  // inlineAssets: true,
  // watchForFileChanges: false

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report',
    reportFilename: 'mochawesome_[name].html',
    charts: true,
    overwrite: true,
    html: false,
    json: true
  }

  
});