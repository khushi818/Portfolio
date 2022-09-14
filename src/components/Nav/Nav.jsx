import './Nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setactiveNav] = useState('#')
    const goto = (classval) => {
        return setactiveNav(classval)
    }

    // const check = (val) => {
    //     if (activeNav === val)
    //         return 'active'
    //     else
    //         return ''
    // }
    return (
        <nav>
            <a href="#header"
                onClick={goto.bind(this, "#header")}
                className={activeNav === '#header' ? 'active' : ''}>
                <AiOutlineHome />
            </a>
            <a href="#about"
                onClick={goto.bind(this, "#about")}
                className={activeNav === '#about' ? 'active' : ''}>
                <AiOutlineUser />
            </a>
            <a href="#portfolio"
                onClick={goto.bind(this, "#portfolio")}
                className={activeNav === '#portfolio' ? 'active' : ''}>
                <BiBook />
            </a>
            <a href="#contacts"
                onClick={goto.bind(this, '#contacts')}
                className={activeNav === '#contacts' ? 'active' : ''}>
                <BiMessageSquareDetail />
            </a>
        </nav>
    )
}

export default Nav