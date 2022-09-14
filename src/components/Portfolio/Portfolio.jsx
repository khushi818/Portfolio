import React, { useState } from 'react'
import './Portfolio.css'
import data from '../../user/projects.json'


// const data = [
//     {
//         "id": "1",
//         "title": "book_list",
//         "image": booklist,
//         "github": "https://github.com/khushi818/MyBookList-App",
//         "demo": "https://luminous-jelly-c82b24.netlify.app/",
//     },
//     {
//         "id": "1",
//         "title": "book_list",
//         "image": booklist,
//         "github": "https://github.com/khushi818/MyBookList-App",
//         "demo": "https://luminous-jelly-c82b24.netlify.app/",
//     }
// ]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
                {
                    data.map(({ id, title, tools, image, github, demo }) => {
                        return (
                            <article key={id} className="portfolio_item">
                                <div className='portfolio_item_image'>
                                    <img src={image} alt="book-list-img" />
                                </div>
                                <div className='portfolio_info'>
                                    <h3>{title}</h3>
                                    <p className='tools'>{tools}</p>
                                    <div className="portfolio_item_btn">
                                        <a href={github} className="btn btn-secondary">Github</a>
                                        <a href={demo} className="btn btn-secondary" target="_blank" rel="noreferrer">Live Demo</a>
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio