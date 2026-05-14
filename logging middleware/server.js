const axios = require("axios");

// Paste your token here
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzYXR5YW0yLjIzMDEwMTExM0BpaWl0YmguYWMuaW4iLCJleHAiOjE3Nzg3NDQ3NTEsImlhdCI6MTc3ODc0Mzg1MSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImYxZDkyZGMyLWJhNmEtNDBlOS05NDI3LWY2MDQxZTVjODExOSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InNhdHlhbSBzaW5naCIsInN1YiI6ImYxMWY1NTNkLWMzNmUtNDA0OC05NmY1LTZhYmFkMTU3NmNiNCJ9LCJlbWFpbCI6InNhdHlhbTIuMjMwMTAxMTEzQGlpaXRiaC5hYy5pbiIsIm5hbWUiOiJzYXR5YW0gc2luZ2giLCJyb2xsTm8iOiIyMzAxMDExMTMiLCJhY2Nlc3NDb2RlIjoiTmJRVGJUIiwiY2xpZW50SUQiOiJmMTFmNTUzZC1jMzZlLTQwNDgtOTZmNS02YWJhZDE1NzZjYjQiLCJjbGllbnRTZWNyZXQiOiJ2VWJrV25kcW1TVFl1UndhIn0.mnq9HndXSbXMk6ebJ9Dql3Yj-HdINWzIVocQAdWcraw";

async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack: stack,
        level: level,
        package: packageName,
        message: message
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log(response.data);

  } catch (error) {

    console.log("Log Failed");

    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

module.exports = Log;