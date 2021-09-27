import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Form, FormGroup, Label, Card, CardBody, CardTitle, Container } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import BasicLayout from "../../components/sectionLayout/basicLayout";
import Overlay from "../../components/overlay";
import AddForm from "../../container/roles/addModal"

//Import Card
const columns = [
    {
        label:  <input type="checkbox" checked={true}  />,
        field: 'select',
        sort: 'disabled',
        width: 150,
    },
    {
        label: 'Name',
        field: 'name',
        sort: 'enable',
        width: 150,
    },
    {
        label: 'Description',
        field: 'description',
        sort: 'enable',
        width: 150,
    },
    {
        label: 'No of users',
        field: 'no',
        sort: 'enable',
        width: 150,
    },
    {
        label: 'Action',
        field: 'action',
        sort: 'disabled',
        width: 100
    }

];


const RolesSection = (props: any) => {

    const [breadcrumbItems, setBreadcrumbs] = useState([
        { title: "Roles", link: "#" },
        { title: "New", link: "#" },
    ])
    const [overlay, setOverLay] = useState<boolean>(false);

    const rows = [
        {
            id: <input type="checkbox" checked={true}  />,
            name: "Super Admin",
            description:"Super Admin",
            no:10,
            action: <i
                onClick={() => setOverLay(!overlay)}
                className="ri-edit-line table-icons"></i>
        },
        {
            id:  <input type="checkbox" checked={true}  />,
            name: "Workspace Admin",
            description:"Workspace Admin",
            no:5,
            action: <i
                onClick={() => setOverLay(!overlay)}
                className="ri-edit-line table-icons"></i>
        }
    ]

    useEffect(() => {

    }, [])

    //Functions
    return (
        <>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Roles" breadcrumbItems={breadcrumbItems} />
                </Container>
                <BasicLayout
                    columns={columns}
                    rows={rows}
                    handleOverlay={() => setOverLay(!overlay)}
                />
                {
                    overlay
                        ?
                        <Overlay
                            overlay={overlay}
                            title={"Add Roles"}
                            isLarge={false}
                            handleOverLay={() => setOverLay(false)}
                        >
                            <AddForm />
                        </Overlay>
                        : null
                }

            </div>
x
        </>
    )
}

export default RolesSection;