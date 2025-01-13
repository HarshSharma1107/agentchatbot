import { useState } from 'react';
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
      <form onSubmit={(e) => {
        e.preventDefault();
        handleQuerySubmit();
      }}>
        <div className="input-group">
          <label htmlFor="platform">Platform:</label>
          <input
            type="text"
            id="platform"
            placeholder="Enter platform (e.g., Segment)"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="query">Query:</label>
          <input
            type="text"
            id="query"
            placeholder="Enter your question"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Ask'}
        </button>
      </form>

      {error && <p className="error">{error}</p>}
      {answer && (
        <div className="answer-container">
          <h2>Answer:</h2>
          <p className="answer">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;