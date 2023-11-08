import './App.css';
import Student from './Student.js';
function App() {
  
  var name="Prasath Nikki";
  var email="oscar@gmail.com";
  var phone="9898918331";
  var add="skcet boys hostel, coimbatore";
  return (
   <div id="main">
    <Student name={name} email={email} phone={phone} add={add}></Student>
   </div>
  );
};
export default App;
