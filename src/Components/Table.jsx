function Table({ data, del }) {


    return (
        <>

            <div className="ab">

                <div className="c2">

                    <div className="c1">
                        <table border={1} cellSpacing={0}>

                            <tr>
                                <th>Name</th>
                                <th>From</th>
                                <th>Valid</th>
                                <th>Seat</th>
                                <th>Status</th>
                            </tr>

                            {data.map((item) => <tr >
                                <td >{item.Name}</td>
                                <td>{item.From}</td>
                                <td>{item.Valid}</td>
                                <td>{item.Seat}</td>
                                <td><button style={{ backgroundColor: "red", boxShadow: "none" }} onClick={() => { del(item) }}>Delete</button></td>
                            </tr>)}




                        </table>
                    </div>



                </div>
            </div>



        </>
    )
}
export default Table