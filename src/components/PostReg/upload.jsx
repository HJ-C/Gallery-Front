import {Link} from 'react-router-dom'
import UpLoadForm from './upLoadForm';
import axios from 'axios';

function UpLoad({mainImg,setMainImg}){

	// 삭제
	function del(){
		if(window.confirm('삭제하시겠습니까')){
			axios.delete('')
			.then(res=>{
				if(res.ok){
					setMainImg({pid:0})
				}
			})
	}
	if (mainImg.pid === 0){
		return null
	}
	}
	

return (
<>
	{/*Open 팝업*/}

	<div className='post_btn'>
		<button className="popup_start">
			<Link to="#" onClick={openPop}>
			<span className="material-icons uploadtext">
				add_circle_outline
			</span>
			</Link>	
			<span className="material-icons deletetext" onClick={del}>
				delete_outline
			</span>
		</button>

	</div>


	{/* 팝업 컨텐츠 영역*/}
	<UpLoadForm></UpLoadForm>

</>
)
}

function openPop() {
document.getElementById("popup_layer").style.display = "block";
}


export default UpLoad