// Class representing an arbitrary state that the application can be in.
const moment = require("moment");
const uuid = require("uuid");

// class State {
//  public:
//   State() {}
//   virtual ~State() {}

class ChecklistItem {
  constructor({
    state =  false,
    title = null,
    description = null,
    parent = null,
    children = []}={}) {
    this.state = state;
    this.lastModifiedDate = moment().format();
    this.id = uuid.v4();
    this.title =  title;
    this.description =  description;
    this.parent = parent;
    this.children = children;
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.lastModifiedDate = moment().format()
    this.state = state;
  }

  getLastModifiedDate() {
    return this.lastModifiedDate;
  }

  // Not needed as long as this is handled in setters
  // setLastModifiedDate() {
  //   this.lastModifiedDate = moment().format();
  // }

  getID() {
    return this.id;
  }

  // Don't even make the id settable beyond its constructor
  // setId(id) {
  //   this.id = id;
  // }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.lastModifiedDate = moment().format()
    this.title = title;
  }

  getDescription() {
    return this.description;
  }

  setDescription(description) {
    this.lastModifiedDate = moment().format()
    this.description = description;
  }

  getParent() {
    return this.parent;
  }

  setParent(parent) {
    this.lastModifiedDate = moment().format()
    this.parent = parent;
  }

  getChildren() {
    return this.children;
  }

  setChildren(children) {
    this.lastModifiedDate = moment().format()
    this.children = children;
  }

  addChild(item) {
    this.lastModifiedDate = moment().format()
    this.children.push(item);
  }

}

module.exports = ChecklistItem;
