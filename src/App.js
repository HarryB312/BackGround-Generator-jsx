import { useEffect, useState } from 'react'
import './App.css'


export default function App(){

  const [color1, setColor1] = useState('#00ff00')
  const [color2, setColor2] = useState('#ff0000')

  const changeColor1 = (e) =>{
    setColor1(e.target.value)
  }

  const changeColor2 = (e) =>{
    setColor2(e.target.value)
  }

  useEffect(() => {
    const background = `linear-gradient(to right, ${color1}, ${color2})`;
    document.body.style.background = background;
  }, [color1, color2]);


  return(
    <div>
          <h1>Cool Generator</h1>
          <input type="color" value={color1} onChange={changeColor1}/>
          <input type="color" value={color2} onChange={changeColor2}/>
          <h2>This is the new background!</h2>
          <h2>`linear-gradient(to right, ${color1}, ${color2})`</h2>
    </div>
  )
}