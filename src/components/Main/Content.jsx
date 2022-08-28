import { useState } from "react"
import axios from "axios"
import UpLoad from '../PostReg/upload';
import { Link } from "react-router-dom";

function Content(props){
    const [comment, setComment] = useState(null)

    // 댓글
    const onCommentHandler = (e) =>{
      setComment(e.currentTarget.value)
    }
    const commentSubmit = () => {
      axios.post('',{
        comment : comment
      },{
        headers: {
          'Content-Type': 'application/json'
          }
      })
      .then(res => res.json())
      .then(result => console.log('결과: ', result));
    }

    // id=1일 데이터 받아오기
    // const Pid = props.mainImg.filter((a,i) =>{
    //   return (a.id < 2)
    // })
    return (
        <>
         <article className="post">
    <div className="post__header">
      <div className="post__profile">
        <Link to="#" className="post__avatar">
          <img src="assets/Main/user.png" alt="User Picture" />
        </Link>
        <span>user1</span>
        {/* <UpLoad></UpLoad> */}
        <UpLoad></UpLoad>
      </div>
    </div>
    <div className="post__content">
      <div className="post__medias" >
      <img src={props.mainImg[props.i].thumbnailUrl} alt="" />
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
      <div className="post__infos">
        <div className="post__title">
          <span>{props.mainImg[props.i].title}</span>
        </div>
        <div className="post__description">
          <span>{props.mainImg[props.i].title}</span>
        </div>
        <div className="post__border">
        </div>
        {/*
        <!-- 댓글 --> */}
        <div>
          <ul className="comment_list">
            <li>
            </li>
          </ul>
        </div>
        <section className="post_comment_wrap">
          <input 
            id="post_comment_input" 
            type="text" 
            placeholder="댓글 달기..." 
            onChange={onCommentHandler}
            />
          <button 
            className="post_comment_btn"
            onClick={commentSubmit}
            >
            <i className='bx bx-send'></i>
          </button>
        </section>
        <span className="post__date-time">more</span>
      </div>
    </div>
  </article>
        </>
    )
}

export default Content