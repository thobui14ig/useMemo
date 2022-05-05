import logo from './logo.svg';
import './App.css';
import ComponentA from './ComponentA.js';
import { useMemo, useState } from 'react';

function App() {
  const [value, setValue] = useState(0)
  const a = { a: 1, b: 2}   
  const b = 4;

  const action = () => {
    setValue(value => value + 1)
  }


  console.log("component Cha")
  //usememo trả lại 1 giá trị // 0001
  const newA = useMemo(() => {
    return a
  }, [])

  return (
    <>
      <p>Gía trị của value: {value}</p>
      <button onClick={action}>ADD</button>



      <ComponentA  a={newA}  />
    </>

  );
}

export default App;
