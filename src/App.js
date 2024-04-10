import React, { useState } from 'react';

const StudentRecords = () => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [error, setError] = useState('');

  const addRecord = () => {
    if (name.trim() === '' || grade.trim() === '') {
      setError('Name and grade fields cannot be empty');
      return;
    }
    setError('');
    alert(`Record added:\nName: ${name}\nGrade: ${grade}`);
  };

  const clearFields = () => {
    if (name !== '' || grade !== '') {
      if (window.confirm('Are you sure you want to clear fields?')) {
        setName('');
        setGrade('');
      }
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw'
    }}>
      <div style={{
        backgroundColor: '#f0f0f0',
        padding: '20px',
        borderRadius: '5px'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Add Student Records</h1>
        <div style={{ textAlign: 'center' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="grade">Grade:</label>
          <input
            type="text"
            id="grade"
            name="grade"
            placeholder="Enter student grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
          <br />
          {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
          <div style={{ marginTop: '20px' }}>
            <button onClick={addRecord}>Add Record</button>
            <button onClick={clearFields} style={{ marginLeft: '10px' }}>Clear Fields</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRecords;