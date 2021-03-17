import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchBakeries, fetchBakeryById, deleteTheBakery, updateTheBakery } from '../actions/bakeries'

function Bakery(props){

    // const id = req.params.id
    console.log("Props" + props)

    useEffect(() => {
        props.dispatch(fetchBakeries())
    }, [])

    
    



return(

    <p>Howdy</p>
)

}

const mapStateToProps = ({ bakery }) => {
	return {
		bakery
	}
}

export default connect(mapStateToProps)(Bakery)