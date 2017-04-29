import {Link} from 'react-router'
import Pin from 'react-icons/lib/fa/map-marker'

const CarItem = ({car}) => {
	return(
        <div className="list-item">
        <Link to={`/item/${car.id}`} className="tbl">
            <div className="tbl-cell img-wrap">
            <img src={car.thumbnail} alt=""/>
            </div>

            <div className="tbl-cell">
                <div className="info-wrap">
                <h4>{car.name}</h4>
                <span>{car.price}</span>
                <p> <i className="icon"><Pin/></i> {car.location}</p>
                </div>
            </div>
        </Link>
        </div>
	)
}

export default CarItem
