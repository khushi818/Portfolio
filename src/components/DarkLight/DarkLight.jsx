import './DarkLight.css'
import { useContext, useState } from 'react';
import { BsFillCloudMoonFill, BsFillCloudSunFill } from 'react-icons/bs'
import { GlobalContext } from '../context/GlobalContext';
const DarkLight = () => {
    const { theme, setTheme } = useContext(GlobalContext)
    const [light, setlight] = useState(false)
    return (
        <span className='dark-section'>
            <button className='btn btn-primary' onClick={() => {
                setlight(!light)
                setTheme(light ? "" : "white-bg")
            }
            }>
                {light ? <BsFillCloudSunFill /> : <BsFillCloudMoonFill />}
            </button>
        </span>
    );
}

export default DarkLight