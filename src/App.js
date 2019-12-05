import React, {Component} from 'react';
// import logo from './logo.svg';
//import './App.css';
import Main from "./Components/Main";
import { BrowserRouter } from 'react-router-dom';
import LoadingScreen from "./Components/Loading";



class App1 extends Component {

  constructor(props)
  {
    super(props);
    this.state = {loading:false};
    this.demoAsyncCall=this.demoAsyncCall.bind(this);
  }

  demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }

  componentDidMount() 
  {
    // this simulates an async action, after which the component will render the content
    this.demoAsyncCall().then(() => this.setState({ loading:true }));
  }
  render()
  {
    return (
      <React.Fragment>
        {!this.state.loading ? (<LoadingScreen />) : 
        (
          <BrowserRouter>
              <Main />
            </BrowserRouter>
         )
         }
      </React.Fragment>
    );
  }
}
export default App1;