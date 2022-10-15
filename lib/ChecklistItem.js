// Class representing an arbitrary state that the application can be in.
const moment = require("moment");
const uuid = require("uuid");

// class State {
//  public:
//   State() {}
//   virtual ~State() {}

class ChecklistItem {
  constructor() {
    this.state = false;
    this.lastModifiedDate = moment();
    this.id = uuid.v4();
    this.title = null;
    this.description = null;
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
  }

  getLastModifiedDate() {
    return this.lastModifiedDate;
  }

  setLastModifiedDate(date) {
    this.lastModifiedDate = moment().format();
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getDescription() {
    return this.description;
  }

  setDescription(description) {
    this.description = description;
  }
}

module.exports = ChecklistItem;
