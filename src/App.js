import React, { useEffect, useState } from 'react'

import axios from 'axios'


function App() {
  const [news, setNews] = useState([])
  const loadNews = async () => {
    try{
      const response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-09-16&sortBy=publishedAt&apiKey=d17b81c0712d431688c1cdfe245707bc")
    setNews(response.data.articles)
    }
    catch (error) {
      console.error('Error loading news:', error);
    }
    
  }

  useEffect(() => {

  }, [loadNews])

  return (
    <div>
      <h1>Quick Read's</h1>
      {
        news.map((newsArticle, index) => {
          const { author, title, description, urlToImage, publishedArt, content } = newsArticle;


         return(
          <>
          <h1>{title}</h1>
          <p>{author}</p>
          </>
         )
        })

      }
    </div>
  )
}

export default App