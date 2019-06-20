import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state={
      nombre: '',
      apellido: '',
      listado: [],
    }
    this.handlerName = this.handlerName.bind(this);
    this.handlerLastName = this.handlerLastName.bind(this);
    this.handlerChange=this.handlerChange.bind(this);
    this.handlerSubmit=this.handlerSubmit.bind(this);
    this.constants = { NAME: 'nombre', LAST_NAME: 'apellido' };
  }

  handlerName(e) {
    this.handlerChange(this.constants.NAME, e.target.value);
  }

  handlerLastName(e) {
    this.handlerChange(this.constants.LAST_NAME, e.target.value);
  }

  handlerChange(prop, value){
    this.setState({
      [prop]: value
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
                <input id={this.constants.NAME} type="text" value={this.state.nombre} className="form-control" name="first-name" onChange={this.handlerName}/>
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input id={this.constants.LAST_NAME} type="text" value={this.state.apellido} className="form-control" name="last-name" onChange={this.handlerLastName} />
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
              </thead>
              <tbody>
                {this.state.listado.map((invitado)=>
                  <tr key={invitado.id}>
                    <td id="first">{invitado.nombre}</td>
                    <td id="last">{invitado.apellido}</td>
                  </tr>
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


