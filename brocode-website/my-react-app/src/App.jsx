import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Fruit from './Fruit.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
import ProfilePicture from './ProfilePicture.jsx';
import UseStates from './UseStates.jsx';
import OnChanges from './OnChanges.jsx';
import ColorPicker from './ColorPicker.jsx';
import UpdateObject from './UpdateObject.jsx';
import UpdateArray from './UpdateArray.jsx';
import Motor from './Motor.jsx';

function App() { //serve as root in our app

  const fruits = [
    {id: 1, name: "apple", calories: 95}, 
    {id: 2, name: "banana", calories: 105}, 
    {id: 3, name: "pineapple", calories: 82}, 
    {id: 4, name: "mangosteen", calories: 144}, 
    {id: 5, name: "orange", calories: 47}
  ];

  const vegetables = [
    {id: 6, name: "Yams", calories: 118}, 
    {id: 7, name: "Avocados", calories: 160}, 
    {id: 8, name: "Corn", calories: 93}, 
    {id: 9, name: "Sweet potatoes", calories: 183}, 
    {id: 10, name: "Lettuce", calories: 14},
  ];
  return (
    <>
      <Motor />
      <br />
      <hr /> 
      <UpdateArray />
      <br />
      <hr /> 
      <UpdateObject />
      <br />
      <hr />  
      <OnChanges />

      <ColorPicker />

      <Header />
      <UseStates />
      {fruits.length > 0 && <List itemList={fruits} category="Fruits" sort={true}/> }
      {vegetables.length > 0 && <List itemList={vegetables} category="Vegetables" sort={false} />}
      
      <Student name="Matthew" age={18} isStudent={true} />
      <Student name="Chariss" age={18} isStudent={true} />
      <Student name="Dave" age={18} isStudent={true} />
      <Student name="Sean" age={21} isStudent={false} />
      <UserGreeting isLogIn={true} username="Matthew"/>
      <Fruit />
      <Card />
      <Card />
      <Card />
      <Button />
      <ProfilePicture />
      <Footer />
      
    </>
  );
}

export default App


// props = read-only properties that are shared between the components.
//         A parent component can send data to a child component 
//         <Component key=value />

// propTypes = a mechanism that ensures that the passed value
//             is correct datatype or expected value data type.
//             age: PropTypes.number

// defaultProps =   default props values for props in case they
//                  are not passed from the parent component 
//                  name: "Guest"

// Conditional rendering =  allows you to control what gets rendered
//                          in your application based on certain condition
//                          (show, hide or change components)

// Click event  = An interaction when a user clicks on a specific element
//                we can respond to clicks by passing
//                a callback to the onClick event handler

// React Hook   = Special function that allows functional components
//                to use React features without writing class components (React v16.8)
//                (useState, useEffect, useContext, useReducer, useCallback, and more...)

// useState()   = A react hook that allows the creation of a stateful variable
//                AND a setter function to update its value in the virtual DOM
//                [name, setName]

// onChange()   = event handler used primarily with form elements
//                ex. <input>, <textarea>, <select>, <radio>
//                Triggers a function everytime the value of the input changes
