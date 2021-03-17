import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchBakeries, deleteTheBakery } from '../actions/bakeries'


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
                      <Link to={`/bakery/${id}`}><h1>{bakery.name}</h1></Link>
											<button onClick={(e)=>handleDelete(id, e)}>Delete</button>
											<br></br>
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