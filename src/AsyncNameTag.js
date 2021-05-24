import React, { Component } from "react";

export default class AsyncNameTag extends Component {
  state = {
    isLoading: false,
    isLoaded: false,
    nombre: null,
    apellido: null
  };
  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({
        isLoaded: true,
        isLoading: false,
        nombre: "Kevin",
        apellido: "Kelly"
      });
    }, 1000);
  };

  renderLoading() {
    return <div className="spinner"> Loading... </div>;
  }

  renderNameTag() {
    const { nombre, apellido } = this.state;
    return (
      <div>
        <div>hola!</div>
        <div> nombre: {nombre}</div>
        <div> apellido: {apellido}</div>
      </div>
    );
  }

  render() {
    const { isLoading, isLoaded } = this.state;
    if (isLoading) {
      return this.renderLoading();
    } else if (isLoaded) {
      return this.renderNameTag();
    } else {
      return null;
    }
  }
}
