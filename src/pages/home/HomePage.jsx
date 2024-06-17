import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    if (value) {
      navigate(`/room/${value}`);
    } else {
      alert("Please enter a room code");
    }
  }, [navigate, value]);

  return (
    <div>
      <input 
        type="text" 
        placeholder='enter code' 
        onChange={e => setValue(e.target.value)} 
        value={value}
      />
      <button onClick={handleJoinRoom}>Join</button>
    </div>
  );
}

export default HomePage;
