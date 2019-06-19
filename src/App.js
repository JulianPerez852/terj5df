import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state={
      nombre: '',
      apellido: '',
      listado: [],
    }
    this.handlerChange=this.handlerChange.bind(this);
    this.handlerSubmit=this.handlerSubmit.bind(this);
  }

  handlerChange(e){
    const variableStado = e.target.id
    this.setState({
      [variableStado]: e.target.value
    });
  }

  handlerSubmit(e){
    e.preventDefault();
    const { nombre, apellido, listado } = this.state;
    const lengthListado = listado.length;
    const invitado = {
      id: lengthListado + 1,
      nombre,
      apellido,
    }
    this.state.listado.push(invitado)
    this.setState({
      nombre: '',
      apellido: '',
      listado,
    });

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handlerSubmit}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input id="nombre" type="text" value={this.state.nombre} className="form-control" name="first-name" onChange={this.handlerChange}/>
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input id="apellido" type="text" value={this.state.apellido} className="form-control" name="last-name" onChange={this.handlerChange} />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>     
                {this.state.listado.map((invitado)=>
                  <tr key={invitado.id}>
                    <td>{invitado.nombre}</td>
                    <td>{invitado.apellido}</td>
                  </tr>
                  )}
              </thead>
              <tbody>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


