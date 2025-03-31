import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

function Signup() {

    const [md, setmd] = useState([])
    const [name, setf] = useState("")
    const [email, sete] = useState("")
    const [password, setp] = useState("")
    const [data, setdata] = useState("")

    const nvt = useNavigate()


    const collectData = async () => {
        console.warn(name, email, password)
        let result = await fetch("http://localhost:5000/register", {
            method: "post",
            body: JSON.stringify({ name, email, password }),
            headers: { "content-type": "application/json" }

        })
        result = await result.json()
        console.log(result);

        nvt("/")
        localStorage.setItem("user", JSON.stringify(result))
    }



    const n = () => {


        if (f == 0) {
            setdata("please enter name")
        }
        else if (e == 0) {
            setdata("please enter email")
        }
        else if (p == 0) {
            setdata("enter your password")
        }
        else {
            setdata("")
            const nd = [...md, { Fullname: f, Email: e, Password: p }]
            setmd(nd)
            localStorage.setItem("key", JSON.stringify(nd))
        }

    }
    useEffect(() => {
        const m = JSON.parse(localStorage.getItem("key"))
        setmd(m)

    }, [])


    return (
        <>


            <div className="c">

                <div className="cc">

                    <h3>Join Us</h3><br />

                    <ul>

                        <li>
                            <p>Fullname</p>
                            <input onChange={(e) => setf(e.target.value)} type="text" placeholder="fullname" />
                        </li><br />

                        <li>
                            <p>Email</p>
                            <input onChange={(e) => sete(e.target.value)} type="email" placeholder="email" />
                        </li><br />


                        <li>
                            <p>Password</p>
                            <input onChange={(e) => setp(e.target.value)} type="password" placeholder="password" />
                        </li><br /><br />

                    </ul>

                    <button onClick={collectData}>Sign Up</button>
                    
                    <p id="c">{data}</p><br /><br />

                   


                    
                </div>


            </div>


        </>
    )

}
export default Signup