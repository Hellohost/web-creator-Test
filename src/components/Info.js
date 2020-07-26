import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Info.css'

export default function Info({ info }) {

    return (
        <div className="wrapper">

            <Row>
                {info.map((i, index) => {
                    return <Col md={6}key={index}>
                        <h4 key={index}>{i.metadata.title}</h4>
                        <div key={index}>{i.metadata.text}</div>
                    </Col>
                }

                )}
            </Row>
        </div>
    )
}
