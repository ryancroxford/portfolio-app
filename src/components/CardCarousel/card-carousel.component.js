import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

class CardCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel
                 interval={null}
                >
                    <Carousel.Item>
                        <CardDeck>
                            <Card>
                                <Card.Body>
                                    <Card.Text>
                                        Hello, this is some text
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Text>
                                        Hello, this is some text
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    Hello, this is some text
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    Hello, this is some text
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default CardCarousel;
