import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App/index.js';

function App(props) {
    return(
        <h1>¡{props.saludo}, {props.nombre}!</h1>
    );
}

function withSaludo(WrappedComponent) {
    return function WrappedComponentWithSaludo (saludo) {
        return function componenteDeVerdad(props) {
            return (
                <React.Fragment>
                    <WrappedComponent {...props} saludo={saludo} />
                    <p>Estamos acompañando al WrappedComponent</p>
                </React.Fragment>
            );
        }
    }
}

const AppWithSaludo = withSaludo(App)('Wenas');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppWithSaludo nombre='Carolina' />
    //<App saludo='Buenas' nombre='Nath' />,
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
