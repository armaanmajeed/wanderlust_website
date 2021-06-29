import React, { Component } from "react";
import { Card,CardGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import NavBar from "./Navbar";
import "./style.css";
import North from '../images/north.jpg'
import South from '../images/south.jpg'
import East from '../images/east.jpg'
import West from '../images/west.jpg'

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <NavBar />
          <div class="container-fluid">
            <div class="container">
              <h1 class="heading">Welcome to India!!</h1>
              <p class="para">
                One of the oldest civilisations in the world, India is a mosaic
                of multicultural experiences. With a rich heritage and myriad
                attractions, the country is among the most popular tourist
                destinations in the world. It is one of the largest country of
                Asia and 7th largest country in the world.
                <br />
                India stands apart from the rest of Asia, marked off as it is by
                mountains and the sea, which give the country a distinct
                geographical entity. Fringed by the Great Himalayas in the
                north, it stretches southwards and at the Tropic of Cancer,
                tapers off into the Indian Ocean between the Bay of Bengal on
                the east and the Arabian Sea on the west.
                <br />
                As you travel the expanse of the country, you are greeted by
                diverse nuances of cuisines, faiths, arts, crafts, music,
                nature, lands, tribes, history and adventure sports. India has a
                mesmeric conflation of the old and the new. As the bustling old
                bazaars rub shoulders with swanky shopping malls, and majestic
                monuments accompany luxurious heritage hotels, the
                quintessential traveller can get the best of both worlds. Head
                to the mountains, enjoy a beach retreat or cruise through the
                golden Thar, India has options galore for all.
              </p>
            </div>
            <CardGroup>
              <Card class="card" style={{ marginBottom: "30px", borderRadius: '20px' }}>
                <Card.Img
                  variant="top"
                  src={North}
                />
                <Card.Body>
                  <Card.Title>North India</Card.Title>
                  <Card.Text>
                    North India is a destination pulsating with extraordinary
                    attractions. Endowed with sheer natural beauty and a rich
                    cultural heritage, North India beckons you for a travel
                    experience of a lifetime.
                  </Card.Text>
                  <NavLink to="/north" class="btn btn-primary" style={{ marginLeft: "31%" }}>View More</NavLink>
                </Card.Body>
              </Card>

              <Card class="card" style={{ marginBottom: "30px", borderRadius: '20px' }}>
                <Card.Img
                  variant="top"
                  src={South}
                />
                <Card.Body>
                  <Card.Title>South India</Card.Title>
                  <Card.Text>
                    What can be more daydream worthy than the images of
                    enchanting beaches with shimmering sand, swaying palms,
                    dramatic sea waves and smiling sun. Thus, making it one of
                    the best travel destinations in India.
                  </Card.Text>
                  <NavLink to="/south" class="btn btn-primary" style={{ marginLeft: "31%" }}>View More</NavLink>
                </Card.Body>
              </Card>

              <Card class="card" style={{ marginBottom: "30px", borderRadius: '20px' }}>
                <Card.Img
                  variant="top"
                  src={East}
                />
                <Card.Body>
                  <Card.Title>East India</Card.Title>
                  <Card.Text>
                    You may think of the Northeast as one large emerald – lush,
                    glittering and green. However, peer closer and you’ll notice
                    this gem has many facets – 8 to be precise. You can have a
                    taste of beaches, temples, monastries.
                  </Card.Text>
                  <NavLink to="/east" class="btn btn-primary" style={{ marginLeft: "31%" }}>View More</NavLink>
                </Card.Body>
              </Card>

              <Card class="card" style={{ marginBottom: "30px", borderRadius: '20px' }}>
                <Card.Img
                  variant="top"
                  src={West}
                />
                <Card.Body>
                  <Card.Title>West India</Card.Title>
                  <Card.Text>
                    From the hippie culture of Goa to the vibrant and
                    responsible outlook of Gujarat, a tour to this part of India
                    will lead you to a worthy spot at every corner. The hustle
                    life of the financial capital of the country, so let's visit
                    West India!!.
                  </Card.Text>
                  <NavLink to="/west" class="btn btn-primary" style={{ marginLeft: "31%" }}>View More</NavLink>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
