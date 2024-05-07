
import React, { useState, useEffect } from 'react';
import OneItem from '../components/OneItem';

const ResultList = ({ searchQuery }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch initial data for the landing page
    fetchItems();
  }, []);

  useEffect(() => {
    // Fetch filtered data based on the search query
    if (searchQuery) {
      fetchItems(searchQuery);
    }
  }, [searchQuery]);

  const fetchItems = async (query = '') => {
    try {
      // Fetch data based on the search query
      const response = await fetch(`https://hn.algolia.com/api/v1/search?${query ? `&query=${query}` : ''}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setItems(data.hits);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <OneItem key={index} item={item} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default ResultList;