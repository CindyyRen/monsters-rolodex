import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  constructor(){
    super()
    this.state9={
      monsters:[],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json)
    .then(users=>this.setState({monsters:users}))
  }
  render() {
    return (
      <div>App</div>
    )
  }
}
