import React from 'react'
import hero from "../assets/hero.jpg"
import '../styles/HomePage.css'
import Typed from "react-typed";
const HomePage = () => {

  return (
    <>
      <main className='main'>
        <div className="text">
          <h2 className='intro'>Hello👋🏻 I am,</h2>
          <h1 className='main-text'>
            {<Typed
              strings={[
                "Saurabh Khatmode",
                "React JS Developer",
                "Front-End Developer",
                "Aspiring MERN Stack Developer"
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop

            />

            }
          </h1>
          <div className="btn">
            <button className='button'>
              Download Resume
            </button>
          </div>
        </div>
        <div className="hero">
          <img src={hero} alt="hero" className='hero-img' />
        </div>
      </main>
      <section className='section'>
        <h1 className='skills'>Skills</h1>
        <li>
          <p>React JS</p>
          <span className='bar'><span className='empty-bar'></span></span>
        </li>
        <li>
          <p>JavaScript</p>
          <span className='bar'><span className='empty-bar'></span></span>
        </li>
        <li>
          <p>MongoDB</p>
          <span className='bar'><span className='empty-bar'></span></span>
        </li>
        <li>
          <p>Bootstrap</p>
          <span className='bar'><span className='empty-bar'></span></span>
        </li>
        <li>
          <p>CSS</p>
          <span className='bar'><span className='empty-bar'></span></span>
        </li>
        <li>
          <p>HTML</p>
          <span className='bar'><span className='empty-bar'></span></span>
        </li>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta commodi ipsum tenetur quibusdam modi, nulla temporibus adipisci voluptatum animi esse, neque laborum quas porro, aliquid accusantium quisquam! Atque libero sunt eaque corporis reiciendis quos obcaecati consequuntur quo culpa velit aperiam perspiciatis necessitatibus et quam saepe totam, fugiat eum rerum eligendi doloremque ea magnam. In et culpa voluptatibus, beatae, ipsam dolor ut eius esse porro minus harum maxime architecto neque accusamus explicabo ex iure delectus enim aliquid, reprehenderit molestias tempore perspiciatis totam provident. Est sequi magnam fugiat minus voluptas ducimus! Nobis ullam, similique, dicta dolor eveniet quia ratione voluptas, dolore perferendis possimus temporibus! Quae amet sit necessitatibus atque quis aliquid nam voluptatem quasi consequatur obcaecati ipsa dicta voluptate id a blanditiis optio consectetur eligendi aut exercitationem accusamus totam, cum minus ut? Pariatur, blanditiis alias fugiat eligendi voluptas perferendis officia quaerat adipisci cupiditate dolorum nesciunt distinctio ut numquam velit in eius harum delectus corporis ex similique quis magni. Dolores nemo quibusdam accusamus doloribus totam. Facere laboriosam animi esse quis itaque vitae reprehenderit impedit beatae rerum consequuntur nulla amet autem alias, perspiciatis voluptas nobis repellendus accusamus reiciendis provident quaerat architecto, facilis incidunt temporibus dicta. Eos saepe possimus, sed architecto et magnam esse expedita.
      </section>

    </>
  )
}

export default HomePage
