
import './App.css';


function App() {
  return (
  
    <div className="App">
      <div className='left-div'>
          <h1>page</h1>
      </div>
      <div className='right-div'>

        <div className='form'>
          <form>
            <h1>login</h1>
            <div className='username'>
              <input type="username" placeholder='username'></input>
            </div>
            <div className='password'>
              <input type='password'placeholder='password'></input>
            </div>
            <div className='login'>
              <button>Login</button>
            </div>
          </form>
        </div>

      </div>
      
    </div>
    
  );
}

export default App;
