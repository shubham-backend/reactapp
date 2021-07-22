import {useState,useEffect} from "react"

function Search(props){
	//console.log("cakes ", props.data);
	let searchString;
	var [searchData,setSearchData] = useState([])
	var cakes = props.data;
	useEffect(()=>{
		//alert("search updated");
	},[searchData])
	
	var searchHandle = function (e){
		searchString = e.target.value;
	}
	
	var filterCakes = function() {
		if(searchString) {
			//console.log("cakes", cakes);
			var cakedata = cakes.filter((res)=>{
				//console.log("cake name", res.name)
				return res.name.toString() === searchString.toString();
			})
			console.log("cake data", cakedata);
			setSearchData(cakedata);
		}
	}
	return (
		<form className="form-inline my-2 my-lg-0">
		  <input onChange={searchHandle} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
		  <button className="btn btn-outline-success my-2 my-sm-0" onClick={filterCakes} type="button">Search</button>
		  <br></br>
		  <p> Cakes are {searchData}</p>
		</form>
	)
}

export default Search