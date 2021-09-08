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
    newFilteredContacts2.push(contacts[10])
    console.log(newFilteredContacts2)
    return setState(newFilteredContacts2);
  }
  
  const sortTheContactsAlfabetically = () => {
    const newArray = newFilteredContacts.sort((a,b) => a.popularity - b.popularity)
    return setState(newArray)
  }

  const removeContacs = () => {
    return newFilteredContacts2.slice()
  }

  console.log(state)
  
  return (
    <div className="App">
    <header>IronContacts</header>
    <button onClick={addRandomContact}>Add a random contact</button>
    <button onClick={sortTheContactsAlfabetically}>Order Alfabetically</button>
    <button onClick={removeContacs}>Remove contact</button>
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
            <tr>
              <td><img style= {{width: 100}} src={contact.pictureUrl} alt="pic"></img></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? 'Won Oscar' : 'No oscar'}</td>
              <td>{contact.wonEmmy ? 'Won Emmy' : 'No Emmy'}</td>
              <td><button>Delete</button></td>
            </tr>
          )
        })}


       </table>
    </div>
  )
}
export default App;
