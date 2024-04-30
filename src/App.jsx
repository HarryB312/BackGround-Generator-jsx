import { useEffect, useState } from "react"

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
}, [color1, color2])



  return(
    <div className="App">
      <h1>Cool Generator</h1>
      <input type="color" value={color1} onChange={changeColor1}/>
      <input type="color" value={color2} onChange={changeColor2}/>
      <p>Copy the below code for your new cool background gradiant!</p>
      <p>`Linear-gradient(to right, {color1}, {color2})`</p>
    </div>
  )
}



// Simpler way

// const [colors, setColors] = useState({
//   color1: '#00ff00',
//   color2: '#ff0000'
// })

// const changeColor = (e) =>{
//   setColors({
//     ...colors, 
//     [e.target.name]: e.target.value
//   })
// }

// useEffect(() => {
//   const background = `linear-gradient(to right, ${colors.color1}, ${colors.color2})`;
//   document.body.style.background = background;
// }, [colors])



//   return(
//     <div className="App">
//       <h1>Cool Generator</h1>
//       <input type="color" name='color1' value={colors.color1} onChange={changeColor}/>
//       <input type="color" name='color2' value={colors.color2} onChange={changeColor}/>
//       <p>Copy the below code for your new cool background gradiant!</p>
//       <p>`Linear-gradient(to right, {colors.color1}, {colors.color2})`</p>
//     </div>
//   )
// }

