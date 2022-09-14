import './Header.css'
import Info from './Info'
import avatar_bg from '../../assets/avatar_bg.png'
import HeaderSocial from './HeaderSocial'
import DarkLight from '../DarkLight/DarkLight'
const Header = () => {
    return (
        <header id="header">
            <DarkLight />
            <div className="container header__Container">
                <div className="intro">
                    <h5>Hello I'm</h5>
                    <h2>Khushi Shukla</h2>
                    <h5 className="text-light">FrontEnd developer</h5>
                    <Info />
                </div>
                <div className="avatar">
                    <img src={avatar_bg} alt="avatar" />
                </div>
                <HeaderSocial />
            </div>
            <a href="#contact" className="scroll_down">scroll down</a>
        </header>
    )
}

export default Header

