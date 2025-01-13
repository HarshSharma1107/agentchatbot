import React, { useState } from 'react';
import './App.css';

function App() {
  const [platform, setPlatform] = useState('');
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleQuerySubmit = async () => {
    if (!platform || !query) {
      setError('Please enter both platform and query');
      return;
    }

    setLoading(true);
    setError('');
    setAnswer('');

    try {
      const response = await fetch(`http://localhost:5000/api/query?platform=${platform}&query=${query}`);
      const data = await response.json();

      // Check if the answer is not empty
      if (data.answer) {
        setAnswer(data.answer);
      } else {
        setAnswer('No answer found');
      }
    } catch (err) {
      setError('Failed to get a response');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Documentation Chatbot</h1>
      <input
        type="text"
        placeholder="Enter platform (e.g., Segment)"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your question"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleQuerySubmit} disabled={loading}>
        {loading ? 'Searching...' : 'Ask'}
      </button>

      {error && <p className="error">{error}</p>}
      {answer && <p className="answer">{answer}</p>}
    </div>
  );
}

export default App;