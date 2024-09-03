import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css';

const News = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
                    params: {
                        country: 'us',
                        apiKey: process.env.REACT_APP_NEWS_API_KEY,
                    },
                });
                setArticles(response.data.articles.slice(0, 5));
            } catch (err) {
                setError('Failed to fetch news. Please try again later.');
            }
        };
        fetchNews();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Latest News</h2>
            <ul>
                {articles.map((article, index) => (
                    <li key={index}>
                        <h3>{article.title}</h3>
                        <p>{article.source.name}</p>
                        <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            Read more
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default News;
