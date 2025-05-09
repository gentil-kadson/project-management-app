import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSiderbar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    currentProject: undefined,
    projects: [],
  });

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSiderbar />
    </main>
  );
}

export default App;
