import react, {Component} from 'react'
import {toast} from 'react-toastify'
import ErrorMessage from '../ErrorMessage'
import ResolvedList from '../ResolvedList'
import Pending from '../Pending'
class InformationField extends Component{
    state={
        pokemon: null,
        error: null,
        status: "idle"
    }
     
    componentDidUpdate(prevProps, prevState){
        if(prevProps.stateName !== this.props.stateName){
            const {stateName} = this.props
            this.setState({
                pokemon: null,
                status: "pending",
                error: null,
            })
            fetch(`https://pokeapi.co/api/v2/pokemon/${stateName}`)
            .then(response=>{
                if(response.ok){
                    return response.json()
                }
                return Promise.reject(new Error("Нет такого покемона"))
            })
            .then(pokemon => this.setState({
                pokemon: pokemon,
                status: "resolved"
            }))
            .catch(error=>this.setState({error, status: "reject"}))
        }
    }
    
    render(){
        console.log(this.state.error)
        const {pokemon, error, status} = this.state

        if(status === "idle"){
            return <p>Для результата поиска введите имя</p>
        }
        if(status === "pending"){
            return <Pending />
        }
        if(status === "reject"){
            return <ErrorMessage message={error.message}/>
        }
        if(status === "resolved"){
            return (
                <ResolvedList pokemon={this.state.pokemon}/>
            )
        }
    }
}
export default InformationField