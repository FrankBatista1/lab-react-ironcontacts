import "./App.css";
import contacts from './contacts.json'
import { useState } from 'react'

const filteredContacts = contacts.filter((contact,index) => {
  return index < 5
})

function App() {
  const [state, setState] = useState(filteredContacts)
  
  const newContcat = contacts[10]

  const addRandomContact = () => {
    const newArrayOfContacts = filteredContacts.push(newContcat)
    return setState(newArrayOfContacts);
  }
  
  const sortTheContactsAlfabetically = () => {
    const newArray = filteredContacts.sort((a,b) => a.popularity - b.popularity)
    return setState(newArray)
  }

  const removeContacs = () => {
    return 1
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
        </tr>
        {state.map((contact) => {
          return (
            <tr>
              <td><img style= {{width: 100}} src={contact.pictureUrl}></img></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? 'Won Oscar' : 'No oscar'}</td>
              <td>{contact.wonEmmy ? 'Won Emmy' : 'No Emmy'}</td>
            </tr>
          )
        })}


       </table>
    </div>
  )
}
export default App;
