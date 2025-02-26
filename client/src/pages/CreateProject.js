import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function CreateProject() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goal: '',
    creator: ''
  });
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/projects', formData);
    history.push('/');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Create New Project</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="goal"
          placeholder="Funding Goal"
          value={formData.goal}
          onChange={handleChange}
        />
        <input
          type="text"
          name="creator"
          placeholder="Your Name"
          value={formData.creator}
          onChange={handleChange}
        />
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
}

export default CreateProject;