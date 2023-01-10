/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../themes.js';
import Overview from './productdetails/overview.jsx';
import { AppDiv, Button } from './App.styled.js';

const QA = React.lazy(() => import('./QA/QA.jsx'));
const RatingsAndReviews = React.lazy(() => import('./reviews/RatingsAndReviews.jsx'));

export default function App() {
  const [currentProduct, setCurrentProduct] = useState({});
  const [productList, setProductList] = useState([]);
  const [allReviews, setAllReviews] = useState(0);
  const [numReviews, setNumReviews] = useState(0);
  const [allStyles, setAllStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState('');
  const [reviews, setReviews] = useState([]);
  const [tab, setTab] = useState('detail');

  const productId = currentProduct.id || 40344;

  const getInitialTheme = () => {
    const data = localStorage.getItem('theme');
    if (data === null || data === 'light') {
      localStorage.setItem('theme', 'light');
      return 'light';
    }
    return 'dark';
  };

  const [theme, setTheme] = useState(getInitialTheme());

  const themeToggler = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  const getProducts = (count) => {
    axios.get('/api/products?count=100', {})
      .then((response) => {
        setProductList(response.data);
      }).catch((error) => {
        console.log(error);
      });
  };

  const getProductStyles = () => {
    axios.get(`/api/products/${productId}/styles`, {}) // jacket is 40344, shoes are 40348
      .then((response) => {
        setAllStyles(response.data.results);
        setCurrentStyle(response.data.results[0]);
      }).catch((error) => {
        console.log(error);
      });
  };

  const getProduct = () => {
    axios.get('/api/products/40344', {})
      .then((response) => {
        setCurrentProduct(response.data);
      }).catch((error) => {
        console.log(error);
      });
  };

  const getAverageReviews = (reviewData) => {
    const ratings = reviewData.results;
    setNumReviews(ratings.length);
    let result = 0;
    for (let i = 0; i < ratings.length; i += 1) {
      result += ratings[i].rating;
    }
    return result / ratings.length;
  };

  const getReviews = () => {
    axios.get(`/api/reviews?product_id=${productId}&count=1000`, {})
      .then((response) => {
        setReviews(response.data.results);
        setAllReviews(getAverageReviews(response.data));
      }).catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProduct();
    getProducts();
  }, []);

  useEffect(() => {
    getProductStyles();
    getReviews();
  }, [currentProduct]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppDiv>
        <h1>Sunny Side Up</h1>
        <div className="center-bar">
          <span className="pointer" style={{ fontWeight: (tab === 'detail' ? 'bold' : '') }} onClick={() => { setTab('detail'); }}>detail</span>
          <span> - </span>
          <span className="pointer" style={{ fontWeight: (tab === 'qa' ? 'bold' : '') }} onClick={() => { setTab('qa'); }}>qa</span>
          <span> - </span>
          <span className="pointer" style={{ fontWeight: (tab === 'reviews' ? 'bold' : '') }} onClick={() => { setTab('reviews'); }}>reviews</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={themeToggler}>THEME</Button>
        </div>
        <div className="page">
          <span style={{ fontWeight: 'bold', paddingBottom: '5px', marginLeft: '23px' }}>SHOP ALL</span>
          <div className="side-bar">
            <div>
              {
              productList.map((product) => <p key={`${product.name}`} className="pointer" onClick={() => { setCurrentProduct(product); setTab('detail'); }}>{product.name}</p>)
              }
            </div>
          </div>

          <div className="main">
            {
              tab === 'detail' ? (
                <Overview
                  currentProduct={currentProduct}
                  allReviews={allReviews}
                  numReviews={numReviews}
                  allStyles={allStyles}
                  currentStyle={currentStyle}
                  setCurrentStyle={setCurrentStyle}
                  reviews={reviews}
                  setTab={setTab}
                />
              )
                : null
            }

            {tab === 'qa' && (
              <Suspense fallback={<div>Loading</div>}>
                <QA currentProduct={currentProduct} />
              </Suspense>
            )}

            {tab === 'reviews' && (
              <Suspense fallback={<div>Loading</div>}>
                <RatingsAndReviews currentProduct={currentProduct} />
              </Suspense>
            )}

          </div>
        </div>
      </AppDiv>
    </ThemeProvider>
  );
}
