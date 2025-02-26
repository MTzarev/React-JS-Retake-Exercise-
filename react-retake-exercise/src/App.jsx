import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
function App() {
  
  return (
    <>
<Card/>
<Button></Button>
<Student name= "Spongebob" age= {30} isStudent={true}/>
<UserGreeting isLoggedIn={false} userName = "Miro"/>

</>

);
 
}


export default App
