import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Calling your Backend on Port 5000
      const res = await axios.post('http://localhost:5000/ask/', { message: input });
      setResponse(res.data.response);
    } catch (err) {
      console.error(err);
      setResponse("Connection Error: Is the backend server running?");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>AI MERN Assistant</h1>
      <form onSubmit={handleSend}>
        <input 
          style={{ padding: '10px', width: '300px' }}
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Ask me something..."
        />
        <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px' }}>
          {loading ? 'Thinking...' : 'Send'}
        </button>
      </form>

      <div style={{ marginTop: '20px', background: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
        <strong>AI says:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;