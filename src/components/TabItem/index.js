// Write your code here
import './index.css'

const TabItem = props => {
    const {tabDeatails, updateTabId, isActiveTab} = props

    const onClickHandle = () => {
        updateTabId(tabDeatails.tabId)
    }

    return (
        <li>
            <button onClick={onClickHandle} className={`tab-btn ${isActiveTab ? 'active-tab' : ''}`}>{tabDeatails.displayText}</button>
        </li>
    )
}

export default TabItem