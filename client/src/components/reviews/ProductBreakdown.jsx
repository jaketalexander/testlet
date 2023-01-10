import React from 'react';
import { ProductBreakdown } from './styles/ProductBreakdown.styled.js';
import './styles/styles.css';

export default function ({ characteristics }) {
  return (
    <ProductBreakdown>
      {
        characteristics.Size !== undefined
          ? (
            <div className="char-box">
              <p>Size: </p>
              <span>1</span>
              <div className="line-box">
                <div style={{ left: `${characteristics.Size.value * 25 - 25}px` }} className="line-icon">|</div>
              </div>
              <span>5</span>
              <p>1: Too small</p>
              <p>5: Too Big</p>
            </div>
          )
          : null
      }
      {
        characteristics.Width !== undefined
          ? (
            <div className="char-box">
              <p>Width: </p>
              <span>1</span>
              <div className="line-box">
                <div style={{ left: `${characteristics.Width.value * 25 - 25}px` }} className="line-icon">|</div>
              </div>
              <span>5</span>
              <p>1: Too small</p>
              <p>5: Too Big</p>
            </div>
          )
          : null
      }
      {
        characteristics.Comfort !== undefined
          ? (
            <div className="char-box">
              <p>Comfort: </p>
              <span>1</span>
              <div className="line-box">
                <div style={{ left: `${characteristics.Comfort.value * 25 - 25}px` }} className="line-icon">|</div>
              </div>
              <span>5</span>
              <p>1: Poor</p>
              <p>5: Great</p>
            </div>
          )
          : null
      }
      {
        characteristics.Quality !== undefined
          ? (
            <div className="char-box">
              <p>Quality: </p>
              <span>1</span>
              <div className="line-box">
                <div style={{ left: `${characteristics.Quality.value * 25 - 25}px` }} className="line-icon">|</div>
              </div>
              <span>5</span>
              <p>1: Poor</p>
              <p>5: Great</p>
            </div>
          )
          : null
      }
      {
        characteristics.Length !== undefined
          ? (
            <div className="char-box">
              <p>Length: </p>
              <span>1</span>
              <div className="line-box">
                <div style={{ left: `${characteristics.Length.value * 25 - 25}px` }} className="line-icon">|</div>
              </div>
              <span>5</span>
              <p>1: Too Short</p>
              <p>5: Too Long</p>
            </div>
          )
          : null
      }
      {
        characteristics.Fit !== undefined
          ? (
            <div className="char-box">
              <p>Fit: </p>
              <span>1</span>
              <div className="line-box">
                <div style={{ left: `${characteristics.Fit.value * 25 - 25}px` }} className="line-icon">|</div>
              </div>
              <span>5</span>
              <p>1: Too big</p>
              <p>5: Too small</p>
            </div>
          )
          : null
      }
    </ProductBreakdown>
  );
}
