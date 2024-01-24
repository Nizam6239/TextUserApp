import React, {useState} from 'react'

export const TextForm = (props) => {
  const handleUpClick = () =>{
    //console.log("UpperCase was Clicked." + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success");
  }
  const handleLoClick = () =>{
    //console.log("UpperCase was Clicked." + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success");
  }
  const handleToClear = () =>{
    //console.log("UpperCase was Clicked." + text);
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared!","success");
  }
  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!","success");
  }
  const handleExtraspaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed","success");
  }
  const handleOnChange = (event) => {
    //console.log("ON Change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1 className='mb-3'>{props.heading}</h1>
    <div className="mb-3">
        <textarea style={{backgroundColor: props.mode==='dark'?'grey':'light',color:props.mode==='dark'?'white':'#042743'}} className="form-control bg-info border border-dark" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LoweCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleToClear}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraspaces}>Remove Extra Spaces</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
  <h2>Your Text Summary</h2>
  <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> word and <b>{text.length}</b> characters</p>
  <p><b>{Math.round((0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length) * 100) / 100}</b> Minutes read </p>
  <p><b>{Math.round(((0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length) * 100)* 60)/ 100}</b> Second read </p>
  <h3>Preview</h3>
  <p>{text.length>0?text:"Nothing to preview!"}</p>
</div>
</>
  )
}
