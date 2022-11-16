import { detectives } from '../utils/detectives';

export default function About() {
    return (
        <main className="About-page">
            <section className="About-header">
                <div className="wrapper">
                    <h2>About</h2>
                </div>
                <div className="About-description wrapper">
                    <div className="description-container">
                        <p>Detective Pokemon is a game in which the user will be invited to solve different types of crime in three cities in the UK and will count on smart and fearless Pokemons to help them to solve the mysteries. </p>
                        <p>This project was created by graduates at Juno College of Technology - Cohort 44. </p>
                    </div>
                    <div className="pikachu-container">
                        <img className='pikachu-detective' src={require(`../assets/images/pokemonDetective.jpg`)} alt="Pikachu detective" />
                    </div>
                </div>
            </section>

            <section className="wrapper">
                <h2>Meet the Detectives</h2>
                <div className="Creators-container">
                    {detectives.map((detective, i) => {
                        return (
                            <div key={detective.name} className={`creator${i + 1}`}>
                                <div className="badge-container">
                                    <div className="badge-description">
                                        <p>Detective</p>
                                        <span className="detective-name">{detective.name}</span>
                                        <div className="medias">
                                            <p className="Button-about"><a href={detective.github} target="_blank" rel="noopener noreferrer">Github</a></p>
                                            <p className="Button-about"><a href={detective.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                                        </div>
                                    </div>
                                    <div className="badge-photo">
                                        <img className='detective-photo' src={require(`../assets/images/${detective.image}`)} alt="Pikachu detective" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </section>
        </main>
    )
}
