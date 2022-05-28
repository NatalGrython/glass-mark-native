const DataStore = require("nedb-promises");

class WorkSpaceStore {
  constructor() {
    const dbPath = `${process.cwd()}/db/data/workspace.db`;
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

  update(id, updatedData) {
    return this.db.update({ _id: id }, { ...updatedData });
  }

  delete(id) {
    return this.db.remove({ _id: id });
  }
}

module.exports = new WorkSpaceStore();
