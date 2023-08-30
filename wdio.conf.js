const { join } = require("path");
const allure = require("allure-commandline");
//const video = require('wdio-video-reporter');


exports.config = {
  // hostname: "localhost",  path: "/wd/hub",
  //port: 443,

  user: "lesliecspedes_KE4lv9",
  key: "GCMC3fnvGq8pLoFeNwyz",
  
  //services: ["appium"],

  services: [
    [
      "browserstack",
      {
        app: "bs://f7c874f21852ba57957a3fdc33f47514288c4ba4",
        buildIdentifier: "${BUILD_NUMBER}",
        browserstackLocal: true,
      },
    ],
  ],

  specs: ["./test/specs/**/*.spec.js"],
  framework: "mocha",

  capabilities: [
    {
      //capabilities for BROWSERSTACK

      platformName: "Android",
      "appium:app": "bs://f7c874f21852ba57957a3fdc33f47514288c4ba4", 
      "appium:deviceName": "Samsung Galaxy S23 Ultra",
      "appium:platformVersion": "13.0",
      'bstack:options': {
        "projectName": "BrowserStack loja EBAC project device farm",
        "buildName": "1",
        "sessionName": "android",
        "appiumVersion": "^2.1.3"
      },
      "appium:autoGrandPermissions": "true",
      
    },

  ],

  waitForTimeout: 30000,
  mochaOpts: {
    timeout: 300000,
  },
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
    /*
    [video,
      {
        saveAllVideos: false, // If true, also saves videos for successful test cases
        videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]
      }],
  */
  ],

  onComplete: function () {
    const reportError = new Error("Could not generate Allure report");
    const generation = allure(["generate", "allure-results", "--clean"]);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 5000);

      generation.on("exit", function (exitCode) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject(reportError);
        }

        console.log("Allure report successfully generated");
        resolve();
      });
    });
  },

  afterStep: async function (
    step,
    scenario,
    { error, duration, passed },
    context
  ) {
    if (error) {
      await driver.takeScreenshot();
    }
  },
};

/*
// capabilities for local Appium web tests on an Android Emulator
/* "appium:platformVersion": "9",
      "appium:deviceName": "ebac-qe",
      "appium:automationName": "UIAutomator2",
      "appium:app": join(process.cwd(), "./app/android/loja-ebac.apk"),
      "appium:appWaitActivity":
        "com.woocommerce.android.ui.login.LoginActivity",
      "appium:autoGrandPermissions": "true",

      */
