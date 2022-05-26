const store = require("../db/store");
const electron = require("electron");

window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const dependency of ["chrome", "node", "electron"]) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }
});

electron.contextBridge.exposeInMainWorld("api", {
  store: {
    findAll: () => {
      return store.findAll();
    },
    findById: (id) => store.findById(id),
    create: (data) => store.create(data),
  },
});
