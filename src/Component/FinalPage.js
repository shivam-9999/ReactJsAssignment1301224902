import React from 'react'
import { useLocation } from 'react-router-dom';

const FinalPage = () =>{
    const {state} = useLocation();
    console.log(state);
  return (
    <div>Thank you , {state.studentEmail}</div>
  )
}
//

export default FinalPage
