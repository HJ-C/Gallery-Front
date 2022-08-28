import sideToggle from './sideToggle';

function Sidebar(){

const onLogout = () =>{
// localStorage에 있는 item삭제
localStorage.removeItem('token')
document.location.href = '/'
}

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
						<a href="#">
							<i className="bx bx-home-alt icon"></i>
							<span className="text nav-text">Home</span>
						</a>
					</li>
					<li className="nav-link">
						<a href="#">
							<i className='bx bx-group icon'></i>
							<span className="text nav-text">Group</span>
						</a>
					</li>
					<li className="nav-link">
						<a href="#">
							<i className='bx bx-bell icon'></i>
							<span className="text nav-text">Notifications</span>
						</a>
					</li>
					<li className="nav-link">
						<a href="#">
							<i className='bx bx-news icon'></i>
							<span className="text nav-text">News</span>
						</a>
					</li>
					<li className="nav-link">
						<a href="#">
							<i className='bx bx-heart icon'></i>
							<span className="text nav-text">Likes</span>
						</a>
					</li>
					<li className="nav-link">
						<a href="#">
							<i className='bx bx-calendar-event icon'></i>
							<span className="text nav-text">Event</span>
						</a>
					</li>
					<li>
						<a href="#">
							<i className="bx bx-log-out icon"></i>
							<span className="text nav-text" onClick={onLogout}>Logout</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</>
)
}

export default Sidebar