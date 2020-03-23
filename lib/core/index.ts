import Project from "./models/project";

class RNer {
  start() {}
  createProject(projectName) {
    const project = new Project(projectName);
    project.create();
  }
}

export default new RNer();
