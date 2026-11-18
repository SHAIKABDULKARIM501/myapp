import React, { useState } from 'react';

function StudentForm() {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${name} (${rollNo})`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '16px' }}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Roll Number (e.g., 25695A0501)"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
        required
        style={{ marginLeft: '8px' }}
      />
      <button type="submit" style={{ marginLeft: '8px' }}>Register</button>
    </form>
  );
}

export default StudentForm;