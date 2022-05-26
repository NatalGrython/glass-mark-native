const DataStore = require("nedb-promises");

class WorkSpaceStore {
  constructor() {
    const dbPath = `${process.cwd()}/workspace.db`;
    this.db = DataStore.create({
      filename: dbPath,
    });
  }

  create(data) {
    return this.db.insert(data);
  }

  findAll() {
    return this.db.find().exec();
  }
  findById(id) {
    return this.db.find({ _id: id }).exec();
  }
}

module.exports = new WorkSpaceStore();
