
import { Container } from 'react-bootstrap';
import { logout } from '../utils/account';
import { useEffect } from 'react';

export default function LogoutPage (props) {
    useEffect(() => {
        logout();
        setTimeout(() => {
            window.location.href = '/login';
        }, 3000)
    })
    return (
        <Container className="logout-page">
            <h1>You are now logged out.</h1>
        </Container>
    );
}