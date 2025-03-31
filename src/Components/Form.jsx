import { useState } from "react"
import DisplayBox from "./DisplayBox"
import { useNavigate } from "react-router-dom"


function Form({ getData, msg }) {
   const navi=useNavigate()




    const [a, seta] = useState("")
    const [b, setb] = useState("")
    const [c, setc] = useState("")
    const [d, setd] = useState("")


    const all = { a, b, c, d }




    return (
        <>
            <div className="aa">


                <div className="b1">
                    <div className="b">
                        <h2 style={{ fontFamily: "roboto, sans-serif" }}>Reserve your seat</h2><br />


                        <ul>
                            <li><label htmlFor="a1">Name</label><br />
                                <input id="a1" onChange={(e) => seta(e.target.value)} type="text" placeholder="Enter your name" /><br /><br /></li>

                            <li><label htmlFor="a2">From</label><br />
                                <input id="a2" onChange={(e) => setb(e.target.value)} type="date" placeholder="Enter your first date" /><br /><br /></li>
                        </ul>


                        <label htmlFor="a3">Valid</label><br />
                        <input id="a3" onChange={(e) => setc(e.target.value)} type="date" placeholder="Enter your last date" /><br /><br />

                        <label htmlFor="a4">Seat</label><br />
                        <input id="a4" onChange={(e) => setd(e.target.value)} type="text" placeholder="Enter your seat no." /><br /><br /><br />

                        <div id="a5">
                            <button onClick={() => {
                                getData(all, navi)

                            }}>Reserve your seat</button>
                        </div>

                        <div id="a">{msg}</div>
                    </div>
                </div>

            </div>



        </>
    )
}
export default Form

