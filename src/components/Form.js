import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './Form.css'

export default function Forms({ form, fields, button }) {

    const main = fields.filter((i) => i.group === 'main')
    const additional = fields.filter((i) => i.group === "additional")

    return (
        <div>
            <h4>{form.title}</h4>
            <Row>
                <Form.Row as={Col} md={8}>

                    {main.map((i) => <Form.Group as={Col} md={6} xs={12}>
                        <Form.Label as={Col} md={12}>{i.label}
                            <Form.Control name={i.name} type={i.type} group={i.group} required={i.required} />
                        </Form.Label>
                    </Form.Group>)}
                </Form.Row>

                <Form.Row as={Col} md={4}>
                    {additional.map((i) => <Form.Group className="formComments">
                        <Form.Label style={{ width: '100%' }}>{i.label}
                            <Form.Control style={{ height: '120px', width: '100%' }} as='textarea' name={i.name} type={i.type} group={i.group} required={i.required} />
                        </Form.Label>
                    </Form.Group>)}
                </Form.Row>
            </Row>
            <Form>
                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`Я даю согласие на обработку персональных данных согласно политике конфиденциальности.`}
                        />                      
                    </div>
                ))}
            </Form>
            <Button variant="{light}" className="btn">{button}</Button>
        </div>
    )
}
