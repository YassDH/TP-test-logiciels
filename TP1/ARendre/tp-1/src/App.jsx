import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PropTypes from 'prop-types';
App.propTypes = {
  url: PropTypes.string 
};

function App({ url }) {
  const [count, setCount] = useState(0)
  const [articles, setArticles] = useState([])
  const [error, setError] = useState(null)

  const fetchData = async () => {
    console.log(url)
    const response = await fetch(url ? url : 'https://api.mosaiquefm.net/mobile/fr/20/1/articles')
    if(response.ok) {
      const data = await response.json()
      setArticles(data.articles)
      setError(null)
    }
    else
      setError('Error fetching data')
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      { articles.length > 0 ? (
        <div>
          <h1>Articles</h1>
          <ul>
            {articles.map((article) => (
              <li key={article.id}>{article.intro}</li>
            ))}
          </ul>
        </div>
      ) : null}      
      {error && <p>{error}</p>}
    </>
  )
}

export default App
