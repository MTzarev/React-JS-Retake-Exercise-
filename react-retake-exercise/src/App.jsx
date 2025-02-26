import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
function App() {
  
  const fruits = [{id: 1, name: "apple", calories: 95}, 
    {id: 2, name: "orange", calories: 45}, 
    {id: 3, name: "banana", calories: 105},
    {id: 4,name: "coconut", calories: 159}];

    const vegetables = [{id: 6, name: "poratos", calories: 95}, 
      {id: 7, name: "celery", calories: 15}, 
      {id: 8, name: "carrots", calories: 25},
      {id: 9,name: "corn", calories: 63}];
  
  return (
    <>
<Card/>
<Button></Button>
<Student name= "Spongebob" age= {30} isStudent={true}/>
<UserGreeting isLoggedIn={false} userName = "Miro"/>

 
<List items = {fruits} category = "Fruits"/>
<List items = {vegetables} category = "Vegetables"/>
</>

);
 
}


export default App
