
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


// 이미지 받아오기
useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/photos?id=1&id=2&id=3&id=4')
  // axios.get('https://jsonplaceholder.typicode.com/photos?id=2')
  .then(res =>{
    setMainImg([...res.data])
  })
},[])


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
            mainImg.map((a,i)=><Content key={a.id}mainImg={mainImg} i={i}></Content>)
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
  <Sidebar></Sidebar>
</>
)
}


export default Main;