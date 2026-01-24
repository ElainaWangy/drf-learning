import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import TodoDetail from './TodoDetail';

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    axios
      .get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({ todos: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {this.state.todos.map(item => (
                  <div key={item.id}>
                    {/* Title as link */}
                    <Link to={`/todo/${item.id}`}>
                      <h1>{item.title}</h1>
                    </Link>
                    <span>{item.body}</span>
                  </div>
                ))}
              </div>
            }
          />
          {/* Detail route */}
          <Route path="/todo/:id" element={<TodoDetail />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
