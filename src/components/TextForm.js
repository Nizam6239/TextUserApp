import React, {useState} from 'react'

export const TextForm = (props) => {
  const handleUpClick = () =>{
    //console.log("UpperCase was Clicked." + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = () =>{
    //console.log("UpperCase was Clicked." + text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleToClear = () =>{
    //console.log("UpperCase was Clicked." + text);
    let newText = '';
    setText(newText);
  }
  const handleOnChange = (event) => {
    //console.log("ON Change");
    setText(event.target.value);
  }
  const style = {
    color: 'black',
    fontweight: 500
  };
  const [text, setText] = useState('');
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea style={style} className="form-control bg-info border border-dark" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mr-4" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mr-4" onClick={handleLoClick}>Convert to LoweCase</button>
    <button className="btn btn-primary mr-4" onClick={handleToClear}>Clear Text</button>
</div>
<div className="container my-3">
  <h2>Your Text Summary</h2>
  <p><b>{text.split(" ").length -1}</b> word and <b>{text.length}</b> characters</p>
  <p><b>{Math.round((0.008 * text.split(" ").length) * 100) / 100}</b> Minutes read </p>
  <p><b>{Math.round(((0.008 * text.split(" ").length) * 100)* 60)/ 100}</b> Second read </p>
  <h3>Preview</h3>
  <p>{text}</p>
</div>
</>
  )
}
