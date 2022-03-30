import react,{Component} from 'react'
import InformationField from './InformationField'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './Form'
import './AppStyle.css'
class App extends Component{
  state={
    name: "",
    loderRequest: false,
  }
  changeState = (stateForm) => {
    
    this.setState({
      name: stateForm
    })
   
  }
  render(){
    return(
      <>
        <div className='center'>
          
          <Form onChangeState={this.changeState}/>
          <InformationField stateName={this.state.name}/>
          <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </>
    )
  }
}
export default App 