import sideToggle from './sideToggle';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Sidebar(){

	const navigate = useNavigate()


// Logout
const onLogout = () =>{
	axios.get('')
		.then(res=>{
			if(res.status === 200){
				localStorage.removeItem('token')
				navigate('/')
			}
		})
}

// Profile User

return (
<>
	<nav className="sidebar close" id="nav">
		<header>
			<div className="image-text">
				<span className="image">
					<img src="assets/Main/user.png" alt="" />
				</span>
				<div className="text logo-text">
					<span className="name">User1</span>
					<span className="profession">Welcome</span>
				</div>
			</div>
			<i className="bx bx-chevron-right toggle" id="close" onClick={sideToggle}></i>
		</header>


		<div className="menu-bar">
			<div className="menu">
				<li className="search-box">
					<i className="bx bx-search icon"></i>
					<input type="text" placeholder="Search..." />
				</li>
				<ul className="menu-links">
					<li className="nav-link">
						<Link to = "#">
							<i className="bx bx-home-alt icon"></i>
							<span className="text nav-text">Home</span>
						</Link>
					</li>
					<li className="nav-link">
						<Link to = "#">
							<i className='bx bx-group icon'></i>
							<span className="text nav-text">Group</span>
						</Link>
					</li>
					<li className="nav-link">
						<Link to ="#">
							<i className='bx bx-bell icon'></i>
							<span className="text nav-text">Notifications</span>
						</Link>
					</li>
					<li className="nav-link">
						<Link to = "#">
							<i className='bx bx-news icon'></i>
							<span className="text nav-text">News</span>
						</Link>
					</li>
					<li className="nav-link">
						<Link to ="#">
							<i className='bx bx-heart icon'></i>
							<span className="text nav-text">Likes</span>
						</Link>
					</li>
					<li className="nav-link">
						<Link to ="#">
							<i className='bx bx-calendar-event icon'></i>
							<span className="text nav-text">Event</span>
						</Link>
					</li>
					<li>
						<div onClick={onLogout}>
							<i className="bx bx-log-out icon"></i>
							<span className="text nav-text">Logout</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</>
)
}

export default Sidebar