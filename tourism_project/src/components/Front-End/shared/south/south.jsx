import React, { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import NavBar from "../Navbar";
import "../style.css";
import South1 from "../../images/south-1.jpeg";
import South2 from "../../images/south-2.jpeg";
import South3 from "../../images/south-3.jpeg";
import South4 from "../../images/south-4.jpeg";
import South5 from "../../images/south-5.jpeg";
import South6 from "../../images/south-6.jpeg";

class South extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <div class="container-fluid">
          <div class="container">
            <h1 class="heading">Welcome to South India!!</h1>
            <p class="para">
              South India encompasses several enchanting destinations such as
              Tamil Nadu, Kerala, Karnataka, Pondicherry and Andhra Pradesh. And
              each destination has its own share of wonderful attractions to
              adorn your holidays with golden memories. From honeymoon tour to
              Ayurveda tour, beach tour, backwater tour, adventure tour,
              pilgrimage tour, wildlife tour and cruise tour, South India has a
              variety of options in its sleeves. For accommodation South India
              offers a variety of options such as luxurious cottages, ayurvedic
              resorts, hotels, houseboats and much more to make your stay
              comfortable and delightful. South India is a haven for nature
              enthusiasts. Clean air, majestic hills and breathtaking views win
              your heart and soul. Nature tourism is on spike in recent years.
              Rather than visiting monuments or indulging in typical tourist
              activities, travelers prefer to leave the hustle behind and retire
              to the mountains for their holidays.
            </p>
          </div>
          <CardGroup>
            <Card
              class="card"
              style={{ marginBottom: "30px", borderRadius: "20px" }}
            >
              <Card.Img variant="top" src={South1} />
              <Card.Body>
                <Card.Title>Bangaluru</Card.Title>
                <Card.Text>
                  Bengaluru is the capital of the Indian state Karnataka. The
                  city was known as the "Garden City of India." Bengaluru was
                  one of the most important tourist centers of the Karnataka
                  state. The central business district of Bengaluru consists of
                  places MG Road, Brigade Road, Commercial Street, Vidhana
                  Soudha, etc. In addition, Bengaluru has many lakes and parks.
                </Card.Text>
                <NavLink
                  to="/north"
                  class="btn btn-primary"
                  style={{ marginLeft: "31%" }}
                >
                  Read More
                </NavLink>
              </Card.Body>
            </Card>

            <Card
              class="card"
              style={{ marginBottom: "30px", borderRadius: "20px" }}
            >
              <Card.Img variant="top" src={South2} />
              <Card.Body>
                <Card.Title>Chennai</Card.Title>
                <Card.Text>
                  Chennai is the capital of the Indian state Tamil Nadu. With
                  its historic landmarks and buildings, long sandy beaches,
                  cultural and art centers, and parks, Chennai's tourism offers
                  many potentially exciting locations to visitors. Chennai is
                  most famous for Tamil classical music & dance, plus
                  Kapaleeshwarar Temple & colonial Fort St. George.
                </Card.Text>
                <NavLink
                  to="/south"
                  class="btn btn-primary"
                  style={{ marginLeft: "31%" }}
                >
                  Read More
                </NavLink>
              </Card.Body>
            </Card>

            <Card
              class="card"
              style={{ marginBottom: "30px", borderRadius: "20px" }}
            >
              <Card.Img variant="top" src={South3} />
              <Card.Body>
                <Card.Title>Kochi</Card.Title>
                <Card.Text>
                  Kochi, formerly known as Cochin, is a city in the Indian state
                  of Kerala. It is the most popular tourist destination for
                  domestic and international visitors to Kerala and is among
                  India's most visited tourist destinations. As per Kerala's
                  Tourism Department, the domestic tourist footfall in the city
                  was more than 23 million in 2017.
                </Card.Text>
                <NavLink
                  to="/east"
                  class="btn btn-primary"
                  style={{ marginLeft: "31%" }}
                >
                  Read More
                </NavLink>
              </Card.Body>
            </Card>
          </CardGroup>

          <CardGroup>
            <Card
              class="card"
              style={{ marginBottom: "30px", borderRadius: "20px" }}
            >
              <Card.Img variant="top" src={South4} />
              <Card.Body>
                <Card.Title>Hyderabad</Card.Title>
                <Card.Text>
                  Hyderabad is the capital and largest city of the South Indian
                  state of Telangana. It was ruled by the Qutub Shahis, Mughals,
                  and the Nizams, which shaped its history. The town is noted
                  for its monuments which include the masterpiece of Charminar
                  and the fort of Golconda. There is a multitude of masjids,
                  temples, churches, and bazaars in the city.
                </Card.Text>
                <NavLink
                  to="/west"
                  class="btn btn-primary"
                  style={{ marginLeft: "31%" }}
                >
                  Read More
                </NavLink>
              </Card.Body>
            </Card>

            <Card
              class="card"
              style={{ marginBottom: "30px", borderRadius: "20px" }}
            >
              <Card.Img variant="top" src={South5} />
              <Card.Body>
                <Card.Title>Alaappuzha</Card.Title>
                <Card.Text>
                  Affectionately nicknamed the 'Venice of the East' by travelers
                  worldwide, Alappuzha is a district of immense natural beauty.
                  Embraced by the Arabian Sea in the west and a network of
                  lakes, lagoons, and freshwater rivers crisscrossing it, this
                  backwater country is home to a vibrant animal and avian life.
                  Under its proximity to the sea, the town has always carved out
                  an exclusive place for itself in the maritime history of
                  Kerala. This was once-prosperous trading and fishing center.
                </Card.Text>
                <NavLink
                  to="/west"
                  class="btn btn-primary"
                  style={{ marginLeft: "31%" }}
                >
                  Read More
                </NavLink>
              </Card.Body>
            </Card>

            <Card
              class="card"
              style={{ marginBottom: "30px", borderRadius: "20px" }}
            >
              <Card.Img variant="top" src={South6} />
              <Card.Body>
                <Card.Title>Mysore</Card.Title>
                <Card.Text>
                  Popularly known as the ‘Cultural capital of Karnataka’, Mysore
                  is a place that beautifully blends splendour of history with
                  the living vibrancy of the traditions and culture which is
                  reflected in the lives of its residents. All this is
                  accompanied by the serenity of nature, making Mysore a dream
                  destination of every travel enthusiasts. Mysore is known with
                  many names such as Garden City, Ivory City, City of Yoga and
                  City of Palace. Living up to every name which has been
                  bestowed on it, Mysore should be on every traveller priority
                  list. Mysore tourism is indeed a holiday idea that caters to
                  everyone.
                </Card.Text>
                <NavLink
                  to="/west"
                  class="btn btn-primary"
                  style={{ marginLeft: "31%" }}
                >
                  Read More
                </NavLink>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    );
  }
}

export default South;
