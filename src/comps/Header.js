import {Link} from 'react-router'

import HomeIcon from 'react-icons/lib/fa/home'

const Header = () => {

	return(
		<div className="header">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						{/*<Link to={'/'} className="brand"><i className="icon-car"></i></Link>*/}
						<Link to={'/'} className="brand"><HomeIcon/></Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
