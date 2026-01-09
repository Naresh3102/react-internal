import React, { useEffect, useState } from "react";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/books", {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NWY3OTE4MTIwMjQ2YTcxOWJmNTJjZiIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzY3OTUxMzI2LCJleHAiOjE3Njc5NTQ5MjZ9.r-bp4V9rWafqYENHML1YzG7NCdH1x7bQzuwbVzdktQk",
          },
        });
        const data = await response.json();
        console.log(data);

        setBooks(data.books);
      } catch (error) {
        console.log("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Books listing page</h1>
      {loading && <p>Loading....</p>}

      {!loading && books.length === 0 && <p>No books found</p>}
      <ul>
        {books.length > 0 && books.map((b) => <li key={b._id}>{b.name}</li>)}
      </ul>
    </div>
  );
};

export default App;
