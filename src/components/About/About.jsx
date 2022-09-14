import './About.css'

const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>
            <div className='about'>
                <div className="image-con">
                    <img src="assets/bio.jpg" aly="bio" />
                </div>
                <div className="about_content">
                    <p>
                        Hello , I am Khushi. I am always eager to learn.I love everything about JavaScript.
                        I am worked in open source and participated in hackathons.
                        I am currently looking for an opportunity to work in an
                        environment where I can grow as an frontend developer.

                    </p>
                    <p><span>Tools:</span> HTML, CSS, JavaScript, ReactJs </p>
                    <p><span>Version Control:</span>Git, Github</p>
                    <p><span>Design Tools:</span>Figma</p>
                    <p><span>Special:</span></p>
                    <ul>
                        <li>Ability to work with documentation</li>
                        <li>Ability to work with Apis</li>
                        <li>Ability to work in groups</li>
                        <li>Multitasking</li>
                    </ul>

                    <p><span>Open Source Experince:</span></p>
                    <p className='Noteslify'>
                        I have been working <a href="https://github.com/devarshishimpi/Noteslify" >Noteslify</a>.They recently launced their first release.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About