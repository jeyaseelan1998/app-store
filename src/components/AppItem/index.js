// Write your code here
import './index.css'

const AppItem = props => {
    const {appDetails} = props

    return (
        <li className='app-container'>
            <img className='app-image' alt={appDetails.appName} src={appDetails.imageUrl}/>
            <p className='app-name'>{appDetails.appName}</p>
        </li>
    )
}

export default AppItem