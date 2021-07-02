import React, { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

import NavBar from "../Navbar";
import "../style.css";
import East1 from "../../images/east-1.jpeg";
import East2 from "../../images/east-2.jpeg";
import East3 from "../../images/east-3.jpeg";
import East4 from "../../images/east-4.jpeg";
import East5 from "../../images/east-5.jpeg";
import East6 from "../../images/east-6.jpeg";

class East extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <div class="container-fluid">
          <div class="container">
            <h1 class="heading">Welcome to East India!!</h1>
            <p class="para">
              Discover the Soul of Calcutta Calcutta is the largest city in
              India, indeed one of the largest in the world. Established as a
              British trading post in the 17th century, the city rapidly grew,
              acquiring a life and vibrancy of its own. Its glory is still
              reflected in the buildings of Chowringhee and Clive Street, know
              as Jawaharlal Nehru Road and Netaji Subhash Road respectively. It
              is a city which leaves no-one indifferent-fascinating,
              effervescent, teeming with life, peoples, cultures. The impact can
              be a shock at first; the rickshaws, cars, brightly painted
              lorries, trolley buses, the cries of the street vendors, labourers
              hard at work on the construction of the vast underground railway,
              the noise and colour of the huge New Market, the bustle of the
              crowds...but soon the jumbled impressions will sort themselves
              out.
            </p>
          </div>
          <CardGroup>
            <Card
              class="card"
              style={{ marginBottom: "30px", borderRadius: "20px" }}
            >
              <Card.Img variant="top" src={East1} />
              <Card.Body>
                <Card.Title>Tawang</Card.Title>
                <Card.Text>
                  Located at the height of about 3048 m, it is known for many
                  important and beautiful monasteries and is famous for being
                  the birthplace of the 6th Dalai Lama, Tsangyang Gyatso. The
                  beautiful town of Tawang, also pronounced as Dawang, has many
                  sceneries to make your trip a picturesque one. However, what
                  begins to define the area is its significance for Buddhist
                  monks. Tawang is the place to go for monasteries, with the
                  Tawang Monastery being the most popular one.
                </Card.Text>
                {/* <NavLink
                  to="/north"
                  class="btn btn-primary"
                  style={{ marginLeft: "31%" }}
                >
                  View More
                </NavLink> */}
              </Card.Body>
            </Card>

            <Card
              class="card"
              style={{ marginBottom: "30px", borderRadius: "20px" }}
            >
              <Card.Img variant="top" src={East2} />
              <Card.Body>
                <Card.Title>Shillong</Card.Title>
                <Card.Text>
                  Shillong, the capital of Meghalaya, is home to numerous
                  waterfalls. The exciting mountain peaks, crystal clear lakes,
                  breathtakingly beautiful golf courses, museums, and the zoo
                  are the key reasons people visit Shillong. Apart from the
                  natural beauty, Shillong also acts as the gateway to
                  Meghalaya.
                </Card.Text>
                {/* <NavLink
                  to="/south"
                  class="btn btn-primary"
                  style={{ marginLeft: "31%" }}
                >
                  View More
                </NavLink> */}
              </Card.Body>
            </Card>

            <Card
              class="card"
              style={{ marginBottom: "30px", borderRadius: "20px" }}
            >
              <Card.Img variant="top" src={East3} />
              <Card.Body>
                <Card.Title>Kolkata</Card.Title>
                <Card.Text>
                  Kolkata, India's second-biggest city, is a perpetually ongoing
                  festival of human existence, concurrently luxurious and
                  squalid, refined and frantic, pointedly futuristic, while
                  beautifully in decay. A vibrant 350-year-old metropolis
                  located on India's Eastern Coast, the capital of West Bengal
                  thrives on contradictions and imposing spectacles; nothing is
                  commonplace in this city.
                </Card.Text>
                {/* <NavLink
                  to="/east"
                  class="btn btn-primary"
                  style={{ marginLeft: "31%" }}
                >
                  View More
                </NavLink> */}
              </Card.Body>
            </Card>
          </CardGroup>

          <CardGroup>
            <Card
              class="card"
              style={{ marginBottom: "30px", borderRadius: "20px" }}
            >
              <Card.Img variant="top" src={East4} />
              <Card.Body>
                <Card.Title>Digha</Card.Title>
                <Card.Text>
                  Beach town situated on the shores of the Bay of Bengal, Digha
                  is a popular tourist destination known for its untouched
                  beaches and scenic views, especially among people in West
                  Bengal. Digha is a one-stop destination for families looking
                  forward to spending a pleasurable weekend.
                </Card.Text>
                {/* <NavLink
                  to="/west"
                  class="btn btn-primary"
                  style={{ marginLeft: "31%" }}
                >
                  View More
                </NavLink> */}
              </Card.Body>
            </Card>

            <Card
              class="card"
              style={{ marginBottom: "30px", borderRadius: "20px" }}
            >
              <Card.Img variant="top" src={East5} />
              <Card.Body>
                <Card.Title>Patna</Card.Title>
                <Card.Text>
                  Patna, historically known as Pataliputra, is the capital city
                  of the Indian state of Bihar. With almost two thousand six
                  hundred years of history in its stride, Patna boasts many
                  heritage and archaeological sites for enthusiast travelers to
                  explore. The city has an affluent historical past and has
                  witnessed rise and fall of many empires.Despite being
                  considered a chaotic city, its past glory of learning and
                  culture has always attracted travelers from all over the
                  world.
                </Card.Text>
                {/* <NavLink
                  to="/west"
                  class="btn btn-primary"
                  style={{ marginLeft: "31%" }}
                >
                  View More
                </NavLink> */}
              </Card.Body>
            </Card>

            <Card
              class="card"
              style={{ marginBottom: "30px", borderRadius: "20px" }}
            >
              <Card.Img variant="top" src={East6} />
              <Card.Body>
                <Card.Title>Darjeeling</Card.Title>
                <Card.Text>
                  Lying amidst the slopes of the Lesser Himalayas and blanketed
                  by emerald green plantations of tea, Darjeeling is a
                  picturesque town in the Indian state of West Bengal. The
                  majestic Kangchenjunga towers over this beautiful town, which
                  is the third highest mountain in the world.
                </Card.Text>
                {/* <NavLink
                  to="/west"
                  class="btn btn-primary"
                  style={{ marginLeft: "31%" }}
                >
                  View More
                </NavLink> */}
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    );
  }
}

export default East;
