import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchBakeries, deleteTheBakery } from '../actions/bakeries'
import { addBakery } from '../apis/bakeries'


function Bakeries(props){

    useEffect(() => {
        props.dispatch(fetchBakeries())
    }, [])

    const handleDelete = (id, e) => {
			if(confirm ("Are you sure you want to delete this bakery?")) {
				e.preventDefault()
        props.dispatch(deleteTheBakery(id))
				alert("Deleted")
				props.history.push("/bakeries")
			}
			else {
				alert("Not deleted")
			}
    }

console.log(props)

    return(
        <>
            {props.bakeries.map(bakery=> {
							const id = bakery.id
                return( 
                    <>
                        <h1 key={bakery.id}>{bakery.name}</h1>
												<button onClick={(e)=>handleDelete(id, e)}>Delete</button>
												<br></br>
                    </>
                )
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