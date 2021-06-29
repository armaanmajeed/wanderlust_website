import React, { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import NavBar from "../Navbar";
import "../style.css";
import North1 from "../../images/north-1.jpeg";
import North2 from "../../images/north-2.jpeg";
import North3 from "../../images/north-3.jpeg";
import North4 from "../../images/north-4.jpeg";
import North5 from "../../images/north-5.jpeg";
import North6 from "../../images/north-6.jpeg";

class North extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <div class="container-fluid">
          <div class="container">
            <h1 class="heading">Welcome to North India!!</h1>
            <p class="para">
              North India Tour will take you to its historic, majestic and
              celestial destinations such as Delhi, Himachal Pradesh, Jammu &
              Kashmir, Rajasthan, Punjab, Haryana, Uttar Pradesh and
              Uttaranchal, which overflow with attractions. North India Tourism
              presents you fascinating attractions like world famous Heritage
              sites, hill stations, adventure sports, scenic beauty,cruises,
              wildlife and pilgrimage sites. North India is a big hit with
              honeymooners, adventure enthusiasts and nature lovers.
              Accommodation takes a whole new meaning in North India as here the
              options are mind- blowing. Offering a variety of choices in terms
              of accommodation, North India is the place where you can stay in
              royal palaces and experience the lifestyles of the raja-maharajas
              of the bygone era.
            </p>
          </div>

          <CardGroup>
            <Card class="card" style={{ marginBottom: "30px", borderRadius: "20px" }}>
              <Card.Img variant="top" src={North1} />
              <Card.Body>
                <Card.Title>Shimla</Card.Title>
                <Card.Text>
                  Shimla or Simla is the capital of the state of Himachal
                  Pradesh in India. It is a trendy holiday retreat during the
                  summer months and is well-known for its Victorian
                  architecture, reflected in certain areas of the Mall and The
                  Ridge. It is also a famous holiday spot for a honeymoon. There
                  are quite a few theories regarding the origin of the word
                  Shimla. Name originates from Shyamali Devi.
                </Card.Text>
                <NavLink
                  to="/north"
                  class="btn btn-primary"
                  style={{ marginLeft: "31%" }}
                >
                  View More
                </NavLink>
              </Card.Body>
            </Card>

            <Card class="card" style={{ marginBottom: "30px", borderRadius: '20px' }}>
              <Card.Img variant="top" src={North2} />
              <Card.Body>
                <Card.Title>Rishikesh</Card.Title>
                <Card.Text>
                  Just imagine sitting by the Ganges ghats overlooking the
                  peaceful river or enjoying the sight of a million stars
                  littering the night sky while you’re out camping. This is what
                  you can feel and experience during your visit to Rishikesh.
                  Rishikesh is the land of spirituality, yoga, adventure, and
                  art.
                </Card.Text>
                <NavLink
                  to="/south"
                  class="btn btn-primary"
                  style={{ marginLeft: "31%" }}
                >
                  View More
                </NavLink>
              </Card.Body>
            </Card>

            <Card class="card" style={{ marginBottom: "30px", borderRadius: '20px' }}>
              <Card.Img variant="top" src={North3} />
              <Card.Body>
                <Card.Title>Nainital</Card.Title>
                <Card.Text>
                  Nainital, the charming Himalayan lake town, is a
                  picture-postcard perfect hill station and one of the most
                  popular in Northern India. Commonly known as the 'Lake
                  District,' Nainital is nestled high up in the Kumaon Himalayas
                  at around 2,000 m above sea level. This beautiful town is
                  surrounded by seven hills, popularly known as 'Sapta-Shring' –
                  Ayarpata, Deopata, Handi-Bandi, Naina, Alma, Lariya-Kanta, and
                  Sher-Ka-Danda. The majestic mountains and the lake's sparkling
                  waters add a considerable lot to the beauty of the town.
                </Card.Text>
                <NavLink
                  to="/east"
                  class="btn btn-primary"
                  style={{ marginLeft: "31%" }}
                >
                  View More
                </NavLink>
              </Card.Body>
            </Card>
          </CardGroup>

          <CardGroup>
            <Card class="card" style={{ marginBottom: "30px", borderRadius: '20px' }}>
              <Card.Img variant="top" src={North4} />
              <Card.Body>
                <Card.Title>Manali</Card.Title>
                <Card.Text>
                  Manali is one of those hill stations where one can find almost
                  every kind of experience. From solitude environment to busy
                  markets, from relaxing retreats to adventure activities, from
                  various sightseeing places to ancient temples.
                </Card.Text>
                <NavLink
                  to="/west"
                  class="btn btn-primary"
                  style={{ marginLeft: "31%" }}
                >
                  View More
                </NavLink>
              </Card.Body>
            </Card>

            <Card class="card" style={{ marginBottom: "30px", borderRadius: '20px' }}>
              <Card.Img variant="top" src={North5} />
              <Card.Body>
                <Card.Title>Agra</Card.Title>
                <Card.Text>
                  Capital of the Mughal empire for more than a hundred years,
                  Agra is home to some of the finest architectural achievements
                  of this remarkable dynasty. As such, it forms the third apex
                  of the Golden Triangle, a popular tourist itinerary that takes
                  in some of India’s famed architectural highlights.
                </Card.Text>
                <NavLink
                  to="/west"
                  class="btn btn-primary"
                  style={{ marginLeft: "31%" }}
                >
                  View More
                </NavLink>
              </Card.Body>
            </Card>

            <Card class="card" style={{ marginBottom: "30px", borderRadius: '20px' }}>
              <Card.Img variant="top" src={North6} />
              <Card.Body>
                <Card.Title>Delhi</Card.Title>
                <Card.Text>
                  You can’t define Delhi in just a few words. The city is too
                  dynamic for that. It’s rich history saturated with old stories
                  reflects in beautiful heritage buildings tucked around the
                  sprawling city. The dusty patina of the old stonewalls gives a
                  rumbling beauty to the city landscape and one can almost hear
                  the sounds of the past echoing.
                </Card.Text>
                <NavLink
                  to="/west"
                  class="btn btn-primary"
                  style={{ marginLeft: "31%" }}
                >
                  View More
                </NavLink>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    );
  }
}

export default North;
