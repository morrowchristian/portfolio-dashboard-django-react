import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects/')
      .then(res => setProjects(res.data))
      .catch(err => console.error('Failed to load projects:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-700">My Portfolio Dashboard</h1>
        <p className="text-gray-600 mt-2">Showcasing my full-stack projects</p>
      </header>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <div key={project.id} className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{project.tech_stack}</p>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex gap-4">
              <a href={project.github_url} target="_blank" rel="noreferrer" className="text-blue-500 font-medium hover:underline">
                GitHub
              </a>
              {project.live_demo_url && (
                <a href={project.live_demo_url} target="_blank" rel="noreferrer" className="text-green-500 font-medium hover:underline">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
