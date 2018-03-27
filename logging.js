const fs = require("fs");
const cd = require("current-date");
const date = cd("date");
const time = cd("time");
const writableSteam = fs.createWriteStream("./logging/" + date + ".txt");


writeToErrorLog = (statusCode, errorMessage, originalUrl, content) => {
    writableSteam.write(
        "Beginning \r\n" +
        time + "- Status Code: "        + errorMessage  + "\r\n" +
        time + "- Error Message: "      + statusCode    + "\r\n" +
        time + "- Destination: "        + originalUrl   + "\r\n" +
        time + "- Request Content: "    + content       + "\r\n" +
        "End", 
        () => {
            writableSteam.end();
        }
    );
}

module.exports = writeToErrorLog;

