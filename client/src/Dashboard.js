import React from 'react'
// import useAuth from './useAuth'
import { Container, Form } from 'react-bootstrap'

export default function Dashboard({ code }) {
    // const accessToken = useAuth(code)
    // const [search, setSearch] = useState("")
    return (
        // <Container>
        //     <Form.Control typr="search" placeholder="Search Songs/Artists" value={search} onChange={e => setSearch(e.target.value)} />
        // </Container>
        <div>{code}</div>
    )
}
