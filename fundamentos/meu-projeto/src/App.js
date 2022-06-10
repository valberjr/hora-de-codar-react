import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

import Frase from './components/Frase';
import List from './components/List';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
    const nome = 'Maria';
    return (
        <div className="App">
            <h1>Testando Eventos</h1>
            <Evento />
            <Evento numero={1} />
            <Evento numero={2} />
            <Form />
        </div>
    );
}

export default App;
