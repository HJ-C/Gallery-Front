// const [comment, setComment] = useState("")

// // 댓글
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

// useEffect(()=>{
//     const commentInput = document.getElementById('post_comment_input');
//     const commentPostBtn = document.getElementsByClassName('post_comment_btn')[i];
  
//     // 댓글 입력시 요소 생성
//     const addNewComment = () => {
//       const newCommentLocation = document.getElementsByClassName('comment_list')[i];
//       const newComment = document.createElement('li');
  
//       newComment.innerHTML = `
//         <div class="user_desc">
//           <em>iAmUser</em>
//           <span>${commentInput.value}</span>
//         </div>
//         <button><i class="far fa-heart fa-xs"></i></button>
//       `;
  
//       newCommentLocation.appendChild(newComment);
//       commentInput.value = '';
//     }
  
//     // 댓글 게시
//     commentPostBtn.addEventListener('click', () => {
//       if (commentInput.value) {
//         addNewComment();
//       }
//     })
// },[])