import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions'
function CakeContainer(props) {

  // in order to get the state and dispatch we need to create two functions and map them with connect 
  // insted use redux hooks which saves much time and less code

    return (
        <div>
           No of cakes is  { props.noOfCakes }
           <button onClick={ () => { props.buyCake() } }>Buy cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      noOfCakes : state.noOfCakes
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      buyCake : () => dispatch(buyCake())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
