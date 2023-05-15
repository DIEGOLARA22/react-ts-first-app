import * as React from 'react';
import './style.css';

export default function App() {
  const [name, setName] = React.useState('');
  function start() {
    setName('Ultra School Torrejon ');
  }
function close(){setName("Close the app ")}
  return (
    <div className="background">
      <h1>Education´s Book</h1>
      <p>{name}This app is ¡fun!</p>
      <button className="green" onClick={start}>
        Start
      </button>
      <button className="red" onClick={close}>Close</button>
    </div>
  )
}
