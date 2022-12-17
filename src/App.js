import './App.css';

import FormInput from './components/form/FormInput';
import FormPut from './components/form/FormPut';
import Formpatch from './components/form/FormPatch';
import FormDel from './components/form/FormDel';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Typography } from 'antd'

const { Meta } = Card
const { Text } = Typography 

function App() {
  const [user, setUser] = useState([])

  const getUser = async()=>{
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    setUser(response.data)
  }

  useEffect(()=>{
    getUser()
  }, [])

  return (
    <main>
      <div className='get-data'>
        <h5 className='ttl'>GET DATA FROM users</h5>

        <hr style={{marginBottom: '25px'}}/>

        <div className='card-container'>
          {user.map((user)=>(
            <div className='card-wrapper'>
              <Card className='card' key={user.id}>
                <Meta title={user.name}/>
                <Meta description={<Text>{user.username}</Text>}/>
                <Meta description={<Text>{user.email}</Text>}/>
                <Meta description={<Text>{user.phone}</Text>}/>
                <Meta description={<Text>{user.website}</Text>}/>
              </Card>
            </div>
          ))}
        </div>

      </div>

      <hr/>

      <div className='manipulate-data'>
        <h5 className='ttl'>MANIPULATE DATA FROM posts</h5>

        <hr style={{marginBottom: '25px'}}/>
        
        <div className='form-container'>
            <FormInput/>
            <FormPut/>
            <Formpatch/>
            <FormDel/>
        </div>

      </div>
    </main>
  );
}

export default App;
