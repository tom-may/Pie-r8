import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchBakeries, deleteTheBakery } from '../actions/bakeries'


function Bakeries(props){

    useEffect(() => {
        props.dispatch(fetchBakeries())
    }, [])

    // const deleteBakery = (id) => {
    //     return props.dispatch(deleteTheBakery(id))
    // }

console.log(props)

    return(
        <>
            {props.bakeries.map(bakery=> {
                return <h1>{bakery.name}</h1>
                }
            )}

        </>
    )


}


const mapStateToProps = ({ bakeries }) => {
	return {
		bakeries
	}
}

export default connect(mapStateToProps)(Bakeries)