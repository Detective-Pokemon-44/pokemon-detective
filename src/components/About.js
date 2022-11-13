export default function About () {
    return (
        <main className="About-page">
            <section className="About-header wrapper">
                <div>
                    <h2>About</h2>
                </div>
                <div className="About-description">
                    <div className="description-container">
                        <p>Detective Pokemon is a game in which the user will be invited to solve different types of crime in three cities in the UK and will count on smart and fearless Pokemons to help them to solve the mysteries. </p>
                        <p>This project was created by graduates at Juno College of Technology - Cohort 44. </p>
                    </div>
                    <div>
                        <img className='pikachu-detective' src={require(`../assets/images/pokemonDetective.jpg`)} alt="Pikachu detective" />
                    </div>
                </div>
            </section>

            <section className="wrapper">
                <h2>Meet the Detectives</h2>
                
                <div className="Creators-container">

                    <div className="creator1">
                        <div className="badge-container">
                            <div className="badge-description">
                                <p>Detective</p>
                                <p className="detective-name">Karl Lu</p>
                                <div className="medias">
                                    <p className="button Button-about"><a href="https://github.com/lunarpirate" target="_blank" rel="noopener noreferrer">Github</a></p>
                                    <p className="button Button-about"><a href="https://www.linkedin.com/in/karl-lu/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                                </div>
                            </div>
                            <div className="badge-photo">
                                <img className='detective-photo' src={require(`../assets/images/pokemonDetective.jpg`)} alt="Pikachu detective" />
                            </div>
                        </div>
                    </div>

                    <div className="creator2">
                        <div className="badge-container">
                            <div className="badge-description">
                                <p>Detective</p>
                                <p className="detective-name">Paula Vivas Teixeira</p>
                                <div className="medias">
                                    <p className="button Button-about"><a href="https://github.com/paulavivasteixeira" target="_blank" rel="noopener noreferrer">Github</a></p>
                                    <p className="button Button-about"><a href="https://www.linkedin.com/in/paulavivasteixeira/?locale=en_US" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                                </div>
                            </div>
                            <div className="badge-photo">
                                <img className='detective-photo' src={require(`../assets/images/paula.png`)} alt="Paula" />
                            </div>
                        </div>
                    </div>

                    <div className="creator3">                 
                        <div className="badge-container">
                            <div className="badge-description">
                                <p>Detective</p>
                                <p className="detective-name">Philip Miles</p>
                                <div className="medias">
                                    <p className="button Button-about"><a href="https://github.com/pgm87" target="_blank" rel="noopener noreferrer">Github</a></p>
                                    <p className="button Button-about"><a href="https://www.linkedin.com/in/philip-miles-01570b24b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                                </div>
                            </div>
                            <div className="badge-photo">
                            <img className='detective-photo' src={require(`../assets/images/pokemonDetective.jpg`)} alt="Pikachu detective" />
                            </div>
                        </div>
                    </div>

                    <div className="creator4">
                        <div className="badge-container">
                            <div className="badge-description">
                                <p>Detective</p>
                                <p className="detective-name">Serena Kang</p>
                                <div className="medias">
                                <p className="button  Button-about"><a href="https://github.com/serenakang77" target="_blank" rel="noopener noreferrer">Github</a></p>
                                <p className="button Button-about"><a href="https://www.linkedin.com/in/serena-kang-0443941b2/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                                </div>
                            </div>
                            <div className="badge-photo">
                            <img className='detective-photo' src={require(`../assets/images/pokemonDetective.jpg`)} alt="Pikachu detective" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>   
        </main>
        
    )

}
