import React, { useState, useEffect } from 'react';
import { Card, CardBody, Col, Row, Container, Button, Label, Input } from "reactstrap";

let roles = ['Add', 'Edit', 'Delete', 'View', 'Import', 'Export'];

const AddModal = (props: any) => {
    return (
        <>
            <br />
            <Row className="mb-3">
                <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Name</Label>
                <Col md={10}>
                    <Input type="text" 
                    defaultValue="" 
                    id="example-text-input" 
                    placeholder="Name"
                    />
                </Col>
            </Row>
            <Row className="mb-3">
                <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Description</Label>
                <Col md={10}>
                    <Input type="text" 
                    defaultValue="" 
                    id="example-text-input" 
                    placeholder="Description"
                    />
                </Col>
            </Row>
            <Row className="mb-3">
                <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Organization</Label>
                <Col md={12}>
                    <Row>
                        {
                            roles.map((r, i) => (
                                <Col key={i} md={2}>
                                    <input id={"org-"+r} type="checkbox" /> &nbsp;
                                    <label htmlFor={"org-"+r}>{r}</label>
                                </Col>
                            ))
                        }
                    </Row>

                </Col>
            </Row>
            <Row className="mb-3">
                <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Users</Label>
                <Col md={12}>
                    <Row>
                        {
                            roles.map((r, i) => (
                                <Col key={i} md={2}>
                                    <input id={"users-"+r} type="checkbox" /> &nbsp;
                                    <label htmlFor={"users-"+r}>{r}</label>
                                </Col>
                            ))
                        }
                    </Row>

                </Col>
            </Row>
            <Row className="mb-3">
                <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Roles</Label>
                <Col md={12}>
                    <Row>
                        {
                            roles.map((r, i) => (
                                <Col key={i} md={2}>
                                    <input id={"roles-"+r} type="checkbox" /> &nbsp;
                                    <label htmlFor={"roles-"+r}>{r}</label>
                                </Col>
                            ))
                        }
                    </Row>

                </Col>
            </Row>
            <Row>
                <Col md={12} className="text-center">
                    <Button type="button" color="primary" style={{ display: 'inline-flex' }}>
                        <i className="ri-git-repository-commits-line" />
                        &nbsp;
                        <span>Submit</span>
                    </Button>
                </Col>
            </Row>

        </>
    )
}

export default AddModal;