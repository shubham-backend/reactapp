function AddCake(props){

return (
        <div>
            <h1>Add Cake</h1>
            <input className="form-control" type="email" placeholder="Enter Cake Name " aria-label="Search"></input>
            <input className="form-control" type="password" placeholder="Enter Price" aria-label="Search"></input>
            <input className="form-control" type="password" placeholder="Enter Weight" aria-label="Search"></input>
            <textarea className="form-control" row="4"placeholder="Enter Description"></textarea>
            
            <button className="btn btn-primary" id="add">Add</button>
        </div>
    )
}

export default AddCake