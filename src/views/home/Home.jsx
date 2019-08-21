import React, { Component } from 'react';
import Card from './../../components/card/Card';

/**
 * Componente basado en clase, utilizado como vista en una aplicacion
 * 
 * @version 1.0.0
 * @author Claudio Rojas <claudio.dcv(a)gmail.com>
 */
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'hola',
            password: '*****',
            tarea: '',
            lista: [],
        };
    }

    /**
     * Metodo generico manejador de evento cambio para inputs
     * @param {HTMLElement} event - evento default al realizar un cambio de estado en un elemento input
     * @returns {undefined}
     */
    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    /**
     * Metodo manejador de evento click para boton que agrega tareas al array lista
     * @returns {undefined}
     */
    handleAddTask = () => {
        const { tarea, lista } = this.state;
        lista.push(tarea);
        this.setState({
            lista,
            tarea: ''
        });
    }

    render() {
        const { parametroEjemplo } = this.props;
        const { username, password, lista, tarea } = this.state;
        return (
            <div>
                <div>{parametroEjemplo}</div>
                <Card title="Titulo" footer="El pie">
                    <input value={username} onChange={this.handleOnChange} name="username" />
                    <input value={password} onChange={this.handleOnChange} name="password" />
                    <input value={tarea} onChange={this.handleOnChange} name="tarea" />
                    <button onClick={this.handleAddTask}>
                        Add
                    </button>
                    {username} - {password}

                    {lista.map((e, i) => (<div key={i}>{e}</div>))}
                </Card>
            </div >
        );
    }
}

export default Home;