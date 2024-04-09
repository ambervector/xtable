import { useState, useEffect } from "react";

import "./App.css";

let sortedArr = [];

const tableContents = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

function App() {
  const [contentsTable, setContentsTable] = useState(tableContents);

  // useEffect(() => {
  //   setContentsTable(tableContents);
  // }, [tableContents]);

  const sortDateHandler = () => {
    contentsTable.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      }

      if (a.date > b.date) {
        return -1;
      }
      return 0;
    });

    sortedArr = [...contentsTable];
    setContentsTable(sortedArr);
  };

  const sortViewsHandler = () => {
    contentsTable.sort((a, b) => {
      if (a.views < b.views) {
        return 1;
      }

      if (a.views > b.views) {
        return -1;
      }
      return 0;
    });

    sortedArr = [...contentsTable];
    setContentsTable(sortedArr);
  };

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={sortDateHandler}>Sort by Date</button>
      <button onClick={sortViewsHandler}>Sort by Views</button>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {contentsTable.map((article) => {
            // console.log(article.date);
            return (
              <tr>
                <td>{article.date}</td>
                <td>{article.views}</td>
                <td>{article.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
