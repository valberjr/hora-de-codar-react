import './App.css';

import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
    const nome = 'Maria';
    return (
        <div className="App">
            <SayMyName nome="Jéssica" />
            <SayMyName nome="Viviane" />
            <SayMyName nome={nome} />
            <Pessoa
                nome="Victória"
                idade="32"
                profissao="Programadora"
                foto="https://avatars2.githubusercontent.com/u/6194?s=460&v=4"
            />
        </div>
    );
}

export default App;
