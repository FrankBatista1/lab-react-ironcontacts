import "./App.css";
import contacts from './contacts.json'
import { useState } from 'react'

const filteredContacts = contacts.filter((contact,index) => {
  return index < 5
})
const newFilteredContacts = JSON.parse(JSON.stringify(filteredContacts))
const newFilteredContacts2 = JSON.parse(JSON.stringify(filteredContacts))

function App() {
  const [state, setState] = useState(filteredContacts)

  const addRandomContact = () => {
    const newName = Math.floor(Math.random() * contacts.length);
    newFilteredContacts2.push(contacts[newName]);
    console.log(newFilteredContacts2);
    return setState(newFilteredContacts2);
  }
  
  

  const sortTheContactsAlfabetically = () => {
   
    const newArray = newFilteredContacts.sort((a,b) => a.popularity - b.popularity)
    return setState(newArray)
  }

  const removeContacts = (id) => {
    const filteredMovies3 = newFilteredContacts2.filter(contact => {
      return contact.id !== id;
    });
    setState(filteredMovies3);
  }

  console.log(state)
  
  return (
    <div className="App">
    <header>IronContacts</header>
    <button onClick={() => addRandomContact()}>Add a random contact</button>
    <button onClick={() => sortTheContactsAlfabetically()}>Order Alfabetically</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Delete</th>
        </tr>
        {state.map((contact) => {
          return (
            <tr key={contact.id}>
              <td><img style= {{width: 100}} src={contact.pictureUrl} alt="pic"></img></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? 'Won Oscar' : 'No oscar'}</td>
              <td>{contact.wonEmmy ? 'Won Emmy' : 'No Emmy'}</td>
              <button onClick={() => removeContacts(contact.id)}>Delete</button>
            </tr>
          )
        })}


       </table>
    </div>
  )
}
export default App;
