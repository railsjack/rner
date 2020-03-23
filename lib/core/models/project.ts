import Module from "rner/lib/core/models/module";

class Project {
  name: string;
  constructor(name) {
    this.name = name;
  }
  create() {
    this.createProjectDirectory();
    return true;
  }
  createProjectDirectory() {
    return true;
  }
  addModule(moduleName: string) {
    const module = new Module(moduleName);
    module.create();
  }
  hasModule(moduleName) {
    return false;
  }
}

export default Project;
