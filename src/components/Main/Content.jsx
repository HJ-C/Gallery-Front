import { useState,useEffect } from "react"
import axios from "axios"
import UpLoad from '../PostReg/upload';
import { Link } from "react-router-dom";
import postCommentInFeed from './comment';

function Content({pfUser,mainImg,i}){
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);

  const onSubmit = e => {
    e.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArray(a => [comment, ...a]);
    setComment('');
  };

  const onChange = event => {
    setComment(event.target.value);
  }
  // useEffect(()=>{
  //   axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
  //     .then((res)=>{
  //       console.log(res.data)
  //       setComment([...res.data])
  //     })
  // },[])
  
// 댓글
// const onCommentHandler = (e) =>{
//   setComment(e.currentTarget.value)
// }
    
// const commentSubmit = () => {
//   axios.post('',{
//     comment : comment
//   },{
//     headers: {
//       'Content-Type': 'application/json'
//       }
//   })
//   .then(result => console.log('결과: ', result));
// }




    // id=1일 데이터 받아오기
    // const Pid = props.mainImg.filter((a,i) =>{
    //   return (a.id < 2)
    // })
    
    return (
        <>
    <main className="main-container">
    <section className="content-container">
      <div className="content">
        <div className="posts"> {/*4줄까지 */}
    <article className="post" >
    <div className="post__header">
      <div className="post__profile">
        <Link to="#" className="post__avatar">
          <img src="assets/Main/user.png" alt="User Picture" />
        </Link>
        <span>
          {pfUser.name}
        </span>
        {/* <UpLoad></UpLoad> */}
        <UpLoad></UpLoad>
      </div>
    </div>
    <div className="post__content">
      <div className="post__medias" >
      <img src={mainImg[i].thumbnailUrl} alt="" />
      </div>
    </div>
    <div className="post__footer">
      <div className="post__buttons">
        <button className="post__button">
          <img src="assets/Main/chat_btn.png" alt="" />
        </button>
        <button className="post__button">
          <img src="assets/Main/love_btn.png" alt="" />
        </button>
        <button className="post__button post__button--align-right">
          <img src="assets/Main/more_btn.png" alt="" />
        </button>
      </div>
      <div className="post__infos" onSubmit={onSubmit}>
        <div className="post__title">
          <span>{mainImg[i].title}</span>
        </div>
        <div className="post__description">
          <span>{mainImg[i].title}</span>
        </div>

        <div className="post__border">
        </div>
        {/*
        <!-- 댓글 --> */}
     <div>
      <ul className="comment_list">
      {commentArray.map((value, id) => (
            <li key={id}>
              <div class="user_desc">
                <em>iAmUser</em>
                <span>{value}</span>
              </div>
           </li>
         ))} 
      </ul>
    </div> 
      <form>
        <section className="post_comment_wrap" >
          <input 
            id="post_comment_input" 
            type="text" 
            placeholder="댓글 달기..." 
            value={comment}
            onChange={onChange}
            />
          <button 
            className="post_comment_btn"
            // onClick={commentSubmit}
            >
            <i className='bx bx-send' ></i>
          </button>
        </section>
        </form>
        <span className="post__date-time">more</span>
      </div>
    </div>
  </article>
  </div>
      </div>
    </section>
    
  </main>
  
        </>

    )
}

export default Content