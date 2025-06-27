import React from 'react';

function NewsCard({ article }) {
  return (
    <div 
      style={{
        display: 'flex',
        border: '1px solid #ddd',
        borderRadius: '8px',
        marginBottom: '1.5rem',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}
    >
      {/* News Image */}
      {article.urlToImage && (
        <img 
          src={article.urlToImage} 
          alt="News"
          style={{ width: '200px', height: 'auto', objectFit: 'cover' }}
        />
      )}

      {/* News Content */}
      <div style={{ padding: '1rem', flex: 1 }}>
        <h3 style={{ marginTop: 0 }}>{article.title}</h3>
        <p style={{ color: '#555' }}>{article.description}</p>
        
        <p style={{ fontSize: '0.9rem', color: '#777' }}>
          Source: {article.source?.name || 'Unknown'} | {new Date(article.publishedAt).toLocaleDateString()}
        </p>
        
        <a 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Read Full Article →
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
