import React from 'react'

export const TextForm = (props) => {
  return (
    <div>
    <h1>{props.heading}</h1>
    <form>
    <div class="form-group">
        <textarea class="form-control" id="myBox" rows="8"></textarea>
    </div>
</form>
</div>
  )
}
