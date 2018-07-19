import React from 'react';

function Add(props) {
  return (
    <div>
      <form onSubmit = {props.onSubmit}>
        <input type='text' name='todo'/>
        <input type='submit' />
      </form>
    </div>
  )

}

export default Add
