import React from "react";
import axios from "axios";

export default class Main extends React.Component {
  state = {
    firsty: "",
    lasty: "",
    imagey: "",
    languagey: "",
    editing: false
  };
  toggleEdit = () => {
    this.setState({
      editing: !this.state.editing
    });
  };
  updateUser = (id, body) => {
    axios.put(`/api/users/${id}`, body).then(res => {
      this.setState({
        [this.props.users]: res.data,
        editing: !this.state.editing,
        first_name: '',
        last_name: '', 
        image: '',
        language: ''
      });
    });
  };
  inputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { first_name, last_name, image, language, id } = this.props.data;
    const {firsty, lasty, imagey, languagey} = this.state
    return this.state.editing ? (
      <div>
        <form action="">
          <input
            onChange={e => this.inputChange(e)}
            value={this.state.firsty}
            name="firsty"
            type="text"
            placeholder="first name"
          />
          <input
            onChange={e => this.inputChange(e)}
            value={this.state.lasty}
            name="lasty"
            type="text"
            placeholder="last name"
          />
          {/* <input
            onChange={e => this.inputChange(e)}
            value={this.state.imagey}
            name="imagey"
            type="text"
            placeholder="image"
          /> */}
          <input
            onChange={e => this.inputChange(e)}
            value={this.state.languagey}
            name="languagey"
            type="text"
            placeholder="language"
          />
          <button onClick={() => this.updateUser(id, { firsty, lasty, imagey, languagey })}>Make Changes</button>
          <button onClick={this.toggleEdit}>Cancel</button>
        </form>
      </div>
    ) : (
      <div>
        <img src={image} alt="" />
        <h2>First Name: {first_name}</h2>
        <h2>Last Name: {last_name}</h2>
        <h3>Spoken Language: {language}</h3>
        <button onClick={() => this.props.deleteUser(id)}>Delete Robot</button>
        <button onClick={() => this.toggleEdit()}>Edit Robot</button>
      </div>
    );
  }
}


