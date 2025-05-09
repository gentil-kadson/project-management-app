import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSiderbar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  let content;

  if (projectsState.selectedProjectId === null) content = <NewProject />;
  if (projectsState.selectedProjectId === undefined)
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSiderbar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
