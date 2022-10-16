const item = require('./ChecklistItem')
const moment = require('moment')
const fs = require('fs')
const { readFromFile, writeToFile, readAndAppend } = require('../src/fsUtils')
const path = require('path')

class EventLogger {
    constructor(res,req) {
        this.logInfo = {
            eventTime: moment().format(),
            eventReq: req,
            eventRes: res
        }
        this.writeLog()
    }

    writeLog() {
        readAndAppend(this.logInfo, path.join(__dirname,'../logs/log.json'))
    }
}

module.exports = EventLogger;