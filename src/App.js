import React, { useState, useEffect } from "react";
import Loading from "components/Loading";
import Error from "components/Error";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTopic = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("./data/topic.json");
      const data = await response.json();
      console.log('data: ', data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTopic();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
      <div className="App">
      </div>
  );
}
