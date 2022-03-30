import {ImSpinner} from 'react-icons/im'
import '../Pending/Pending.css'
export default function Panding(){
  return (
    <div role="alert">
        <div> 
          <ImSpinner  className="iconAnimation" size="32"/>
        </div>
    </div>
  )
}
