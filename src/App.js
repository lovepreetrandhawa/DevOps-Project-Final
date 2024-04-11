import React, { useState } from 'react';

const StudentRecords = () => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [error, setError] = useState('');

  const addRecord = () => {
    if (name.trim() === '' || grade.trim() === '') {
      setError('Please fill in both the name and grade fields');
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
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Student Records</h1>
        <div style={{ textAlign: 'center' }}>
          <label htmlFor="name" style={{ marginBottom: '10px', display: 'block', color: '#555' }}>Student Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '20px', width: '300px' }}
          />
          <br />
          <label htmlFor="grade" style={{ marginBottom: '10px', display: 'block', color: '#555' }}>Student Grade:</label>
          <input
            type="text"
            id="grade"
            name="grade"
            placeholder="Enter student grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '20px', width: '300px' }}
          />
          <br />
          {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
          <div style={{ marginTop: '20px' }}>
            <button onClick={addRecord} style={{ padding: '10px 20px', borderRadius: '5px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Add Record</button>
            <button onClick={clearFields} style={{ padding: '10px 20px', borderRadius: '5px', background: '#dc3545', color: '#fff', border: 'none', cursor: 'pointer', marginLeft: '10px' }}>Clear Fields</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRecords;
