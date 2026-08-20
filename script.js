import React, { useState } from 'react';

// 1. Header Component
export const Header = ({ title }) => (
  <header style={{ padding: '1rem', background: '#2563eb', color: 'white' }}>
    <h1>{title}</h1>
  </header>
);

// 2. Button Component
export const Button = ({ label, onClick, variant = 'primary' }) => {
  const isPrimary = variant === 'primary';
  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 16px',
        backgroundColor: isPrimary ? '#2563eb' : '#64748b',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      {label}
    </button>
  );
};

// 3. Card Component (Dynamic State via Props)
export const Card = ({ title, content, onLike }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(prev => prev + 1);
    if (onLike) onLike();
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', margin: '8px 0' }}>
      <h3>{title}</h3>
      <p>{content}</p>
      <div style={{ marginTop: '10px', display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button label={`Like (${likes})`} onClick={handleLike} />
      </div>
    </div>
  );
};

// 4. Form Component (State & Form Event)
export const Form = ({ onSubmit }) => {
  const [inputVal, setInputVal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputVal);
    setInputVal('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '1rem 0' }}>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Enter component label..."
        style={{ padding: '8px', marginRight: '8px' }}
      />
      <Button label="Add Item" onClick={handleSubmit} />
    </form>
  );
};

// 5. Footer Component
export const Footer = ({ text }) => (
  <footer style={{ padding: '1rem', background: '#f1f5f9', textAlign: 'center', marginTop: '2rem' }}>
    <p>{text}</p>
  </footer>
);