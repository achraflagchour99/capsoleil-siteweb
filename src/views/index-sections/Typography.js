import React from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import "./card.css";
function AlbumCard({ album }) {
  return (
    <Card className="album-card">
      <CardImg top src={album.image} alt="Album" />
      <CardBody>
        <CardTitle tag="h5" className="album-title">{album.name}</CardTitle>
      </CardBody>
    </Card>
  );
}

function Typography() {
  const albums = [
    {
      id: 1,
      name: "DHJ VS WAC",
      image: require("assets/img/wacvsdhj1.jpg"),
      link: "/album1",
    },
    {
      id: 2,
      name: "DHJ VS HUSA",
      image: require("assets/img/oxygreen.jpeg"),
      link: "/album2",
    },
    {
      id: 3,
      name: "DHJ VS OCS",
      image: require("assets/img/345027845_179669061371304_7716538633442899912_n.jpg"),
      link: "/album3",
    },
    {
      id: 4,
      name: "DHJ VS MAT",
      image: require("assets/img/wacvsdhj2.jpg"),
      link: "/album3",
    },
    {
      id: 5,
      name: "MAS VS DHJ",
      image: require("assets/img/wacvsdhj3.jpg"),
      link: "/album3",
    },
    {
      id: 6,
      name: "SCCM VS DHJ",
      image: require("assets/img/craquage.jpeg"),
      link: "/album3",
    },  
  ];

  return (
    <>
      <div className="section">
        <Container>
          <h3 className="title">SAISON 2022-2023</h3>
          <div className="space-50"></div>
          <div id="albums">
            <Row>
              {albums.map((album) => (
                <Col sm="4" key={album.id}>
                  <Link to={album.link}>
                    <AlbumCard album={album} />
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Typography;
