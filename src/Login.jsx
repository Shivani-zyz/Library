import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navi = useNavigate()

    const handelLogin = async () => {
        console.warn(email, password)
        let result = await fetch("http://localhost:5000/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: { "content-type": "application/json" }
        })
        result = await result.json();
        console.warn(result)
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result))
            navi("/")


        } else {
            alert("please enter correct details")
        }
    }


    return (
        <>

            <div className="d">

                <div className="d1" >
                    <p style={{ color: "Highlight", fontFamily: "sans-serif" }}>USER LOGIN</p><br /><br />


                    <img style={{ borderRadius: "7px" }} src="https://st4.depositphotos.com/9998432/23767/v/450/depositphotos_237678852-stock-illustration-person-gray-photo-placeholder-man.jpg" alt="" width={"35px"} /><br /><br /><br />


                    <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br /><br /><br /><br />

                    <button onClick={handelLogin}> LOG IN</button>
                

                </div>

            </div>



        </>
    )
}
export default Login