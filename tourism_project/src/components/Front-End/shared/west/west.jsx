import React, { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import NavBar from "../Navbar";
import "../style.css";
import West1 from "../../images/west-1.jpeg";
import West2 from "../../images/west-2.jpeg";
import West3 from "../../images/west-3.jpeg";
import West4 from "../../images/west-4.jpeg";
import West5 from "../../images/west-5.jpeg";
import West6 from "../../images/west-6.jpeg";

class West extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <div class="container-fluid">
          <div class="container">
            <h1 class="heading">Welcome to West India!!</h1>
            <p class="para">
              What does an ideal vacation for a nature enthusiast look like?
              Lush green valleys, mountains rising into and above the clouds,
              orange sunsets and dense woods leading to a perfect view. Western
              India is blessed with the countryside charms of Goa, boosting
              prospects of nature tourism. Roads with trees on both sides and a
              spectacular journey ahead describe how it feels walking on the
              paths of Goa. The mesmerizing hill stations in Maharashtra such as
              Mahabaleshwar, Panchgani and Lonavala among many others leave you
              spell-bounded by the raw beauty of nature. The laid-back life on
              the islands of Daman and Diu and waking up to beautiful sunrise in
              the Dadra and Nagar Haveli is what a vacation looks like. Blessed
              with a diverse landscape, West India is a paradise for water
              babies. Long coastlines and sandy beaches become the highlight of
              your vacation. Goa is one of the best beach destinations in India
              with its scenic beaches and clear blue skies.
            </p>
          </div>
          <CardGroup>
            <Card
              class="card"
              style={{ marginBottom: "30px", borderRadius: "20px" }}
            >
              <Card.Img variant="top" src={West1} />
              <Card.Body>
                <Card.Title>Goa</Card.Title>
                <Card.Text>
                  With the best reasons to visit Goa every year, it is love at
                  first sight! This pint-sized state is more than just beaches,
                  alcohol, and trance parties. A kaleidoscopic blend of Indian
                  and Portuguese cultures, sweetened with sun, sea, sand,
                  seafood, and spirituality, there's nowhere in India quite like
                  it. Located in the country's southwest, Goa, India's smallest
                  state, is also one of the most prosperous and most literate.
                  There is so much that is unique about Goa, with many visitors
                  finding the laid-back pace of life awesome.
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

            <Card
              class="card"
              style={{ marginBottom: "30px", borderRadius: "20px" }}
            >
              <Card.Img variant="top" src={West2} />
              <Card.Body>
                <Card.Title>Mahabaleshwar</Card.Title>
                <Card.Text>
                  A wonderful getaway in the Western Ghats of Maharashtra,
                  Mahabaleshwar was once a summer capital for the British of the
                  Bombay province. A few hours' Mahabaleshwar, a hill station in
                  the Sahyadri range of Maharashtra, is India's most popular
                  tourist destination. This picturesque and serene destination
                  offers mesmerizing views of the soaring peaks, verdant
                  forests, green valleys, and sparkling rivers. Mahabaleshwar is
                  the perfect destination to relax in leisure.
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

            <Card
              class="card"
              style={{ marginBottom: "30px", borderRadius: "20px" }}
            >
              <Card.Img variant="top" src={West3} />
              <Card.Body>
                <Card.Title>Jodhpur</Card.Title>
                <Card.Text>
                  Jodhpur is a breathtakingly beautiful city, with stunning blue
                  houses everywhere. The ‘Blue City,' also known as ‘Sun City,'
                  is located in the majestic state of Rajasthan. The magnificent
                  Mehrangarh Fort that towers over the city is an incredible
                  architectural masterpiece. Surrounding this fort is the old
                  city, a blissful tangle of meandering lanes and glittering
                  bazaars.
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
            <Card
              class="card"
              style={{ marginBottom: "30px", borderRadius: "20px" }}
            >
              <Card.Img variant="top" src={West4} />
              <Card.Body>
                <Card.Title>Daman</Card.Title>
                <Card.Text>
                  There are many places to visit in Daman that unfold the
                  multicolored panorama of this city with their unique charm.
                  The oldest cathedrals to beautiful parks and historical
                  museums are filled with tons of enthralling places that can
                  turn your vacation into a dream holiday. It also houses the
                  oldest chapels and churches that enchant visitors with their
                  charming architecture and serenity.
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

            <Card
              class="card"
              style={{ marginBottom: "30px", borderRadius: "20px" }}
            >
              <Card.Img variant="top" src={West5} />
              <Card.Body>
                <Card.Title>Dadra & Nagar Haveli</Card.Title>
                <Card.Text>
                  Snuggled cozily amid the state of Maharashtra and Gujarat,
                  Dadra & Nagar Haveli is located in the western corner of
                  India. It lies on the north bank of the Daman Ganga River.
                  This small union territory sprawls over an area less than 500
                  sq. km, covered with tall, awesome trees and winding rivers.
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

            <Card
              class="card"
              style={{ marginBottom: "30px", borderRadius: "20px" }}
            >
              <Card.Img variant="top" src={West6} />
              <Card.Body>
                <Card.Title>Junagarh</Card.Title>
                <Card.Text>
                  Steeped in the history, Junagarh is situated in a district
                  having the same name in the state of Gujrat. The city’s name
                  can be translated to ‘old fort.' It was also termed as
                  ‘Yonagadh,' which means ‘City of the Greeks,' as it was once
                  ruled by the Greeks.The attraction that tops the list of
                  must-visit places in Junagadh is the Uperkot Fort. The
                  Buddhist Caves, Adi-Kadi Vav, and Jamia Masjid are places you
                  can visit within the fort.
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

export default West;
