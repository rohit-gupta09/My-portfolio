import React from 'react'
import "./card.css"
import Logo from "../src/img/logo.png" 
const imgs={Logo};
const Card = (props) => (
    <div className="card boxcard">
      <img src={props.imgUrl}
      
        alt={ props.alt || 'Image' } />
      {console.log(props.imgUrl+" ")}
      <div className="card-content card2">
        <h2>{ props.title }</h2>
        <p>{ props.content }</p>
      </div>
    </div>
  );
  
  const CardContainer = (props) => (

    <div className="cards-container card1">
      {
        props.cards.map((card) => (
          <Card title={ card.title }
            content={ card.content }
            imgUrl={ card.imgUrl } />
        ))
      }
    </div>
  );
function CardsSlider() {

    const cardsData = [
        {id: 1, title: 'UPES ACM ACM-W WEB APP', content: 'This application is created for UPES ACM & ACM-W student chapter team to showcase the work and initiatives to masses.', imgUrl:Logo},
        {id: 2, title: 'CARD 2', content: 'Bruce Wayne', imgUrl: 'https://unsplash.it/201/200'},
        {id: 3, title: 'CARD 3', content: 'Peter Parker', imgUrl: 'https://unsplash.it/200/201'},
        {id: 4, title: 'CARD 4', content: 'Tony Stark', imgUrl: 'https://unsplash.it/201/201'},
      ]

    return(
        <div className="container con">
          <h1 style={{ 'text-align': 'center' }}>
            Projects
          </h1>
          {console.log(Logo.url)}
          <CardContainer cards={ cardsData } />
        </div>
      );
}



export default CardsSlider