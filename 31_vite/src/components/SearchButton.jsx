import React from "react"
import { Button, Form, FormControl } from "react-bootstrap"

export default function SearchButton(){
    
    return (
    <Form className="d-flex">
        <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
        />
    <Button variant="outline-success">Search</Button>
    </Form>
    )
}