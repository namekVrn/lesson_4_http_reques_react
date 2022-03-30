import errorImg from '../../img/error.jpg'
import '../ErrorMessage/ErrorMessage.css'
function ErrorMessage({message}){
        return(
            <div className="errorImage">
                <img src={errorImg} width="320" alt="error"/>
                <h4>{message}</h4>
            </div>
        )
}
export default ErrorMessage       