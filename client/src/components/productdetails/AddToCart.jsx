import React, { useState, useRef } from 'react';
import Select from 'react-select';
import StyledAddToCart from './styles/AddToCart.styled.js';

function AddToCart({ currentStyle }) {
  const [quantityOptions, setQuantityOptions] = useState([]);
  const [styleSelected, setStyleSelected] = useState('');
  const [quantitySelected, setQuantitySelected] = useState(1);
  const [notSelected, setNotSelected] = useState(false);
  const styleSelectedRef = useRef();

  const sizes = [];
  const quantity = [];

  if (currentStyle !== undefined) {
    for (const keys in currentStyle.skus) {
      if (currentStyle.skus[keys].quantity > 0) {
        sizes.push({label: currentStyle.skus[keys].size, value: keys, quantity: currentStyle.skus[keys].quantity});
        quantity.push({label: currentStyle.skus[keys].quantity, value: keys});
      }
    }
  }

  const grabStyleID = (e) => {
    setStyleSelected(e.value);
    setNotSelected(false);
    const totalQuantity = currentStyle.skus[e.value].quantity;
    const newQuantityOptions = [...Array(Math.min(15, totalQuantity)).keys()];
    const finalQuantityOptions = [];
    for (let i = 1; i < newQuantityOptions.length + 1; i += 1) {
      finalQuantityOptions.push({ label: i, value: i });
    }
    setQuantityOptions(finalQuantityOptions);
  };

  const grabQuantity = (e) => {
    setQuantitySelected(e.value);
  };

  const addProduct = (data) => {
    // console.log('Selected: [product_id, style_id, quantity]', data);
  };

  const chooseSize = () => {
    setNotSelected(true);
    if (styleSelectedRef.current) {
      styleSelectedRef.current.focus();
    }
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: '#fff',
      borderColor: '#9e9e9e',
      margin: '8px 8px 8px 0',
      minHeight: '30px',
      height: '30px',
      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided) => ({
      ...provided,
      height: '30px',
      padding: '0 20px',
    }),

    input: (provided) => ({
      ...provided,
      margin: '0px',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: '30px',
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      paddingTop: 5,
      paddingBottom: 20,
    }),
    clearIndicator: (styles) => ({
      ...styles,
      paddingTop: 5,
      paddingBottom: 20,
    }),
  };

  return (
    <StyledAddToCart>
      { notSelected ? <div>~Please Select Size~</div> : null}
      {sizes.length > 0 ? (
        <div>
          <Select
            options={sizes}
            ref={styleSelectedRef}
            onChange={(e) => grabStyleID(e)}
            placeholder="Select Size"
            openMenuOnFocus
            styles={customStyles}
            aria-label="Select Size"
          />
        </div>
      )
        : (
          <div>
            <Select placeholder="OUT OF STOCK" isDisabled styles={customStyles} styles={customStyles} aria-label="Out of Stock" />
          </div>
)}
      {styleSelected !== ''
        ? (
          <div>
            <Select options={quantityOptions} onChange={(e) => grabQuantity(e)} defaultValue={1} placeholder={1} styles={customStyles} aria-label="Quantity Selector" />
          </div>
        )
        : (
          <div>
            <Select isDisabled placeholder="-" styles={customStyles} aria-label="Disabled Quantity Selector Please Choose Size"/>
          </div>
        )}
      {sizes.length < 1
        ? null
        : styleSelected !== ''
          ? (
            <button
              onClick={() => addProduct([currentStyle.style_id, styleSelected, quantitySelected])}>Add To Cart
            </button>
          )
          : <button onClick={chooseSize}>Add To Cart</button>}
    </StyledAddToCart>
  );
}

export default AddToCart;
