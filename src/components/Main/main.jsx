
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
// 검색
const [posts, setPosts] = useState([])
const [searchTitle, setSearchTitle] = useState("")

// 이미지 받아오기
useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/photos?id=1&id=2')
  .then(res =>{
    setMainImg([...res.data])
    console.log(res.data)
  })
},[])

// 검색목록
useEffect(()=>{
  const searchBox = async ()=>{
      const response = await axios.get("https://jsonplaceholder.typicode.com/photos?id=1&id=2")
      setPosts(response.data)
      
  }
  searchBox()
},[])



return (
<>
  {/* Header*/}
  <MainHeader></MainHeader>

 {/* Main Contents */}

        {
            mainImg
              .map((a,i)=><Content 
            key={a.id}
            mainImg={mainImg} 
            i={i}
            pfUser={pfUser}
            setPfUser={setPfUser}
            ></Content>
            )
        }
      {/* {
                    posts
                    .filter( a => { 
                    if(searchTitle === ""){
                        return a
                    }else if(
                        a.title.toLowerCase().includes(searchTitle.toLowerCase()))
                    return a
                })
      } */}

  {/* Sidebar --> */}
  <Sidebar 
    pfUser={pfUser} 
    setPfUser={setPfUser}
    setSearchTitle={setSearchTitle}
    ></Sidebar>


  {/* Side Menu */}
  <SideMenu></SideMenu>

  {/* Footer */}
  <Footer></Footer>
 

</>
)
}


export default Main;