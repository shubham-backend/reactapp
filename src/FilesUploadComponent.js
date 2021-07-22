import {useState,useEffect} from "react"
import axios from "axios"

function FilesUploadComponent() {
	
	var handleUpload = function(e){
		let apiurl = "https://apifromashu.herokuapp.com/api/upload";
		var formdata = new FormData(this);
		formdata.append('file',e.target.files[0])
		var loginToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNodWJoYW1AeW9wbWFpbC5jb20iLCJpYXQiOjE2MjU4MDA0NzZ9.EYE0bMOKRwNVhdJx5IJEPNOEgElz56TKA13jWnap2EU';
		axios({
			url: apiurl,
			method: 'post',
			data:formdata,
			headers:{
				authtoken:loginToken
			}
		}).then((response)=>{
			console.log("success", response);
		},(error)=>{
			console.log("error", error);
		})
		
	}

	return 	(
			<div style={{marginLeft:"1em"}}>
				<h4>Upload Page</h4>
				
				<input type="file" onChange={handleUpload} id="email" class="fadeIn second" name="file_upload"></input>
				
			</div>
	)

}

export default FilesUploadComponent