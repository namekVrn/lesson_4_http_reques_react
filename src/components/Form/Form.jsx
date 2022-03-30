import react, {Component} from 'react'
import '../Form/Form.css'
import {toast} from 'react-toastify'
import {ReactComponent as ZoomIcon} from "../../img/zoom.svg"
class Form extends Component{
    state={
        name: '',
    }
    onchangeInput = (evt) =>{
        console.log(this.state.name)
        this.setState({name: evt.currentTarget.value.toLowerCase().trim()})
    }
    onSubmitForm = evt =>{
        evt.preventDefault()
        if(this.state.name === ''){
            toast.warn('Введите поисковой запрос', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return
        }
        this.props.onChangeState(this.state.name)
        console.log(evt)
        this.setState({
            name: ''
        })
    }

    render(){
        return(
            <>  
            
                <form onSubmit={this.onSubmitForm} className="form">
                    <input type="text" className="imputSerch" name="name" value={this.state.name} onChange={this.onchangeInput} placeholder="поиск"/>
                    <button type="submit" className="btnSerch">
                        Найти
                        <ZoomIcon width="32"/>
                        </button>
                </form>
            </>
        )
    }
}
export default Form