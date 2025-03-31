import { Link, useNavigate } from "react-router-dom"

function Nav(){
    const navigate=useNavigate()
   
const auth=localStorage.getItem("user")

function logout(){
    localStorage.clear("user")
    navigate("/sign")
    
    
}



    return(<>
    <div className="nav">
        <ul>
            {auth?<><li><Link id="new" to="/">Home </Link></li>
            <li><Link  id="new" style={{width:"100px"}} to="/studenttable"> Student Table</Link></li>
            <li><Link  id="new" to="/seats">Seats</Link></li>
            <li><Link  id="new" to="/reserve">Reserve</Link></li>
            <li onClick={logout}><Link  id="new" to="/sign">Logout</Link></li></>:<>  <li><Link id="nav" to="/sign">Sign Up</Link></li>
            <li><Link style={{backgroundColor:"limegreen"}} id="nav" to="/log">Login</Link></li></>}
          
        </ul>

    </div>
    
    
    </>)
}


export default Nav

