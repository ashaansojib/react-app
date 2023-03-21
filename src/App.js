import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
/*
1. kno kicu import korte chaile useState command ta use korte hy. ata kono ekta array k import kore. useState er bame ekta contant array ba sei array awala kno kicu bosate hy. useState method a duita peramiter hy ekta default man ba initial man bosate hy trpr ekta function bose. useState function take call korle duita jinish return dey ekta array and ekta function.

*/
function App(){
  return (
    <div>
      <Product></Product>
      <RestCountry></RestCountry>
    </div>
  )
}

function Product(){
  const [count, setCount] = useState(20);
  const increaseCounter = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  
  return (
    <div className="container">
      <h2>Counter: {count}</h2>
      <button onClick={increaseCounter}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
    </div>
  )
}

/*
Note : dynamiclly kno data load korte gele 5 ta step follow korte hy. first kono ekta datatkbe kina setar jnne ekta empty array rakhhte hbe useState er vitore. tar dane setake desctructuring kortehbe.
2. useState er choto vai useEffect, useEffect a duita value thke first a ekta function carray korte pare tar pashe ekta empty array bosate hy. functon er vitore ekta empty function likhte hbe jar kno nam nai man jai without dependencey. just ekta khali arrow function. ekta peraameter and ekta body thkbe mot kotha ekta annonimous function use korte hbe.
3. useEffect er vite just data fetch korte hbe
4. tar por data take set er jaygay set korte hbe use korar smy just dane man ta set hbe and setake bosaate hbe.
*/

function RestCountry(){
  const [users, setUser] = useState([]);
  // console.log(users)
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  }, []);

  return (
    <div>
    {
      users.map( user => <User name={user.name} email={user.email}></User>)
    }
    </div>
  )
}

function User(props){
  return (
    <div className='container'>
      <h2>{props.name}</h2>
      <p>Email Address: {props.email}</p>
    </div>
  )
}
export default App;
