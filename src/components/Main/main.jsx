
import { useState } from 'react';
import  {Link} from 'react-router-dom'
import postCommentInFeed from './comment';
import axios  from 'axios';
import { useEffect } from 'react';
import Footer from './Footer';
import Sidebar from './SiderBar';
import SideMenu from './SideMenu';
import MainHeader from './MainHeader';
import Content from './Content';


function Main(){
const [mainImg,setMainImg] = useState([])
// ProfileUser
const [pfUser, setPfUser] = useState([])

// Profile User


// 이미지 받아오기
useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/photos?id=1&id=2&id=3&id=4')
  .then(res =>{
    setMainImg([...res.data])
  })
},[mainImg])


return (
<>
  {/* Header*/}
  <MainHeader></MainHeader>

  {/* Main Contents */}
  <main className="main-container">
    <section className="content-container">
      <div className="content">
        <div className="posts">
          {/* Content */}
          {
            mainImg.map((a,i)=><Content 
            key={a.id}
            mainImg={mainImg} 
            i={i}
            pfUser={pfUser}
            setPfUser={setPfUser}
            ></Content>)
          } 
        </div>
      </div>
    </section>
  </main>


  {/* Side Menu */}
  <SideMenu></SideMenu>

  {/* Footer */}
  <Footer></Footer>

  {/* Sidebar --> */}
  <Sidebar pfUser={pfUser} setPfUser={setPfUser}></Sidebar>
</>
)
}


export default Main;