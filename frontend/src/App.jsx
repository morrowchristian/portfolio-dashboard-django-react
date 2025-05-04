import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/projects/')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.title}</strong><br />
            <em>{project.tech_stack}</em><br />
            <a href={project.github_url} target="_blank" rel="noreferrer">GitHub</a>
            {project.live_demo_url && <> | <a href={project.live_demo_url} target="_blank" rel="noreferrer">Live Demo</a></>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
