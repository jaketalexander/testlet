import React from 'react';

export default function RadioClicker({ name, setFunc }) {
  return (
    <div>
      <p>{name}</p>
      <input type="radio" name={name} onClick={() => setFunc(1)} />
      <label>1</label>
      <input type="radio" name={name} onClick={() => setFunc(2)} />
      <label>2</label>
      <input type="radio" name={name} onClick={() => setFunc(3)} />
      <label>3</label>
      <input type="radio" name={name} onClick={() => setFunc(4)} />
      <label>4</label>
      <input type="radio" name={name} onClick={() => setFunc(5)} />
      <label>5</label>
    </div>
  )
}
