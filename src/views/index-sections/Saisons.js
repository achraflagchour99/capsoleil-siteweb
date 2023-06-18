import React from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import "./card.css";
import IndexNavbar from "components/Navbars/IndexNavbar";
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

function Saisons() {
  const albums = [
    {
      id: 1,
      name: "Saison 2022-2023",
      image: require("assets/img/wacvsdhj1.jpg"),
      link: "/2022-2023",
    }
  ];

  return (
    <>
    <IndexNavbar/>
      <div className="section">
        <Container>
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

export default Saisons;
