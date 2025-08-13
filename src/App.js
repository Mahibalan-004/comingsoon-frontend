// App.js
import React, { useEffect, useState } from 'react';
import Contact from './components/contact';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);

  // Read API base URL from environment variables with fallback
  const API_BASE_URL =
    process.env.REACT_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/some-route`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const apiData = await response.json();
        console.log("✅ API Response:", apiData);
        setData(apiData);
      } catch (err) {
        console.error("❌ Error fetching API:", err);
      }
    };

    fetchData();
  }, [API_BASE_URL]);

  return (
    <div className="container">
      <h1>Data from Backend:</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}

      {/* Contact form component */}
      <Contact />
    </div>
  );
};

export default App;
