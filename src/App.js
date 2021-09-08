import "./App.css";
import contacts from './contacts.json'
import { useState } from 'react'

function App() {
  const [contact, stateContact] = useState(contacts)
  const filteredContacts = contact.filter((contact,index) => {
    return index < 5
  })
  return (
    <div className="App">
    <header>IronContacts</header>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        <tr>
          <td><img style= {{width: 100}} src={contact[0].pictureUrl}></img></td>
          <td>{contact[0].name}</td>
          <td>{contact[0].popularity}</td>
        </tr>
        <tr>
          <td><img style= {{width: 100}} src={contact[1].pictureUrl}></img></td>
          <td>{contact[1].name}</td>
          <td>{contact[1].popularity}</td>
        </tr>
        <tr>
          <td><img style= {{width: 100}} src={contact[2].pictureUrl}></img></td>
          <td>{contact[2].name}</td>
          <td>{contact[2].popularity}</td>
        </tr>
        <tr>
          <td><img style= {{width: 100}} src={contact[3].pictureUrl}></img></td>
          <td>{contact[3].name}</td>
          <td>{contact[3].popularity}</td>
        </tr>
        <tr>
          <td><img style= {{width: 100}} src={contact[4].pictureUrl}></img></td>
          <td>{contact[4].name}</td>
          <td>{contact[4].popularity}</td>
        </tr>
      </table>
    </div>
  )
}
export default App;
