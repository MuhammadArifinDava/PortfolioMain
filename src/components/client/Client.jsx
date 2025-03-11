import React from 'react';
import { motion } from 'framer-motion';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Client.scss';
import logoImg from "/herofix.png";
import { TypeAnimation } from "react-type-animation";

const Client = () => {
  return (
    <Card className="Client">
      <Card.Body className='Clients'>
        <Row>
          <Col md={8}>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Card.Title className='title'>My Client</Card.Title>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <Card.Text className='text'>
                Proudly introducing some clients who have wholeheartedly...
                <div>
                  <TypeAnimation
                    sequence={[
                      "collaborated with me❤️",
                      800,
                      "contracted with me❤️",
                      800,
                      "are currently collaborating with me❤️",
                      800,
                    ]}
                    wrapper="span"
                    speed={70}
                    cursor={true}
                    style={{
                      color: "rgb(5, 76, 112)"
                    }}
                    repeat={Infinity}
                  />
                </div>
                <section id="clients" className="clients-section">
                  <div className="container">
                    <div className="w-full px-4">
                      <div className="flex flex-wrap items-center justify-center">
                        <a href="#" className="client-logo">
                          <img src="clients/1.svg" alt="gojek" />
                        </a>
                        <a href="#" className="client-logo">
                          <img src="clients/2.svg" alt="shopee" />
                        </a>
                        <a href="#" className="client-logo">
                          <img src="clients/3.svg" alt="tokopedia" />
                        </a>
                        <a href="#" className="client-logo">
                          <img src="clients/4.svg" alt="Google" />
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </Card.Text>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
              <Card.Img src={logoImg} className='image' />
            </motion.div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Client;