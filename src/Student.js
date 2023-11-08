import './App.css';
const Student=(props) => {
    return(
        <div id="main">
            <h1>Table</h1>
            <table cellspacing="0px" border="2px solid black">
                <tr>
                    <td>Name:</td>
                    <td>{props.name}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{props.email}</td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td>{props.phone}</td>
                </tr>
                <tr>
                    <td>Address:</td>
                    <td>{props.add}</td>
                </tr>
            </table>

        </div>
    );
}
export default Student