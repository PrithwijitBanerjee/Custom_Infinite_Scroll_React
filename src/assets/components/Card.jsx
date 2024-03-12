/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const Card = ({title,body,id}) => {
    return (
        <>
            <div className="card" style={{ width: '20rem', margin: '10px' }}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                    <Link to={`/cardDetail/${id}`} className="btn btn-primary">View More</Link>
                </div>
            </div>

        </>
    )
}

export default Card