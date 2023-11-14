import React, { Component } from 'react'
import loading from './loading.gif'
export class Loader extends Component {
  render() {
    return (
<div className='text-center'>
      <img src={loading} alt='loading' style={{width: "28px"}}/>

    </div>    )
  }
}



export default Loader
