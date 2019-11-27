import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import axios from 'axios'

export default class App extends React.Component {
  state = {
    users: [],
    first_name: '',
    last_name: '',
    language:''
  }
  componentDidMount(){
    this.getUsers()
  }
  getUsers = () => {
    axios.get(`/api/users`).then(res => {
      this.setState({users: res.data})
    })
  }
  addUser = (body) => {
    axios.post(`/api/users`, body).then(res => {
      this.setState({
        users: res.data,
        first_name: '',
        last_name: '',
        language: ''
      })
    })
  }
  deleteUser = (id) => {
    axios.delete(`/api/users?id=${id}`).then(res => {
      this.setState({
        users: res.data
      })
    })
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const {first_name, last_name, language} = this.state
    let users = this.state.users.map((el, i) => (
      <Main  users={this.state.users} deleteUser={this.deleteUser} key={i} data={el}/>
    ))
    console.log(this.state.users)
    return (
      <div className="App">
          <Nav/>
          <form action="">
            <input onChange={e => this.handleChange(e)} value={this.state.first_name} name='first_name' type="text" placeholder='first name'/>
            <input onChange={e => this.handleChange(e)} value={this.state.last_name} name='last_name' type="text" placeholder='last name'/>
            <input onChange={e => this.handleChange(e)} value={this.state.language} name='language' type="text" placeholder='language'/>
            <button onClick={() => this.addUser({first_name, last_name, language})}>Add Robot</button>
          </form>
          {users}
          <Footer/>
      </div>
    );
  }
}

