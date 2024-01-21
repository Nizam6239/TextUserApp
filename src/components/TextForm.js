import React, {useState} from 'react'

export const TextForm = (props) => {
  const handleUpClick = () =>{
    //console.log("UpperCase was Clicked." + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    //console.log("ON Change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here2');
  return (
    <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to upperCase</button>
</div>
  )
}
