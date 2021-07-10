import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions'
function CakeContainerTwo() {

    // using useSelector and useDispatch Hooks

    const noOfCakes = useSelector((state) => state.noOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            The no of cakes is  { noOfCakes }
            <button onClick={ () => { dispatch(buyCake()) } }>Buy cake</button>
        </div>
    )
}

export default CakeContainerTwo
