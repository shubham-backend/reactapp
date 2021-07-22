import { useEffect } from "react";
function Cakedetails(props){
    useEffect(() => {
        let apiUrl = "https://apifromashu.herokuapp.com/api/cake/"+props.match.params.cakeid
        console.log(apiUrl);
    },[])
console.log(props.match.params);
    return(
        <div>
            Cake details page {props.match.params.cakeid}
        </div>
    )
}

export default Cakedetails