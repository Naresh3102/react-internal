import React, { useEffect, useState } from "react";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://backend-janbatch.vercel.app/api/books",
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        );
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
