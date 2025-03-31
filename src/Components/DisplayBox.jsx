import { useState } from "react"

function DisplayBox({ col, box, new1, data }) {

    const seat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 55]
    const [w, setw] = useState(false)
    let f1 = data.map((item) => parseInt(item.Seat))


    return (

        <>
            {w && <div className="mb" onClick={() => { setw(false) }}> <div className="b11"> {new1.map((item) => <>
                <table border={1} cellSpacing={0}>
                    <tr><th>Name</th><td>{item.Name}</td></tr>
                    <tr><th>From</th><td>{item.From}</td></tr>
                    <tr><th>Valid</th><td>{item.Valid}</td></tr>
                    <tr><th>Seat</th><td>{item.Seat}</td></tr>
                </table>
            </>)}</div></div>}

            
            <div className="chair">
                <div className="chair1">
                    {

                        seat.map((item) => <button style={{
                            backgroundColor: f1.includes(item) ? 'red' : 'green'
                        }} onClick={() => {
                            box(item)
                            setw(true)
                        }}>{item}</button>)
                    }
                </div>
            </div>
        </>)


}
export default DisplayBox 