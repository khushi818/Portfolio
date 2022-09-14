import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs'

const HeaderSocial = () => {
    return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/khushi-shukla-a008b2220/" target="_blank" rel="noreferrer"><BsLinkedin /> </a>
            <a href="https://github.com/khushi818" target="_blank" rel="noreferrer"><BsGithub /></a>
            <a href="https://twitter.com/KhushiS26" target="_blank" rel="noreferrer"><BsTwitter /></a>
        </div>
    )
}

export default HeaderSocial