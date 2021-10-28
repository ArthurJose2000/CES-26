import './App.css';
import Calculator from './components/Calculator';
import {createStore} from 'redux';
import calculatorReducer from './reducer/calulatorReducer';
import {Provider} from 'react-redux';

function App() {

  const store = createStore(calculatorReducer);

  return (
    <div className="App">
      <Provider store={store}>
        <Calculator></Calculator>
      </Provider>
    </div>
  );
}

export default App;
