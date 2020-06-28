import React, { useState } from 'react'

import Header from './components/Header'

function App() {
  const [projects, setProjects] = useState(['App expo', 'Api node.js'])

  function handleAddProject() {
    setProjects([...projects, `New project ${Date.now()}`])
    console.log(projects)
  }

  return (
    <>
      <Header title="Projects"/>

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  )
}

export default App;