import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import logo from '../../images/oresto-blanc.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container d-flex justify-content-between text-uppercase">
                    <ListGroup className="col-lg-3 col-md-6" flush>
                        <ListGroupItem className="text-white" tag="a">Restaurant</ListGroupItem>
                        <ListGroupItem tag="a" href="/">Accueil</ListGroupItem>
                        <Link href="/menus" to="/menus"><ListGroupItem tag="a">Menus</ListGroupItem></Link>
                        <Link href="/galerie" to="/galerie"><ListGroupItem tag="a">Galerie</ListGroupItem></Link>
                        <Link href="/reservation" to="/reservation"><ListGroupItem tag="a">Réservation</ListGroupItem></Link>
                    </ListGroup>
                    <ListGroup className="col-lg-3 col-md-6" flush>
                        <ListGroupItem className="text-white" tag="a">Nous contacter</ListGroupItem>
                        <ListGroupItem tag="a" href="/contact">Contact</ListGroupItem>
                        <ListGroupItem tag="a" href="/serviceclient">Service client</ListGroupItem>
                        <ListGroupItem tag="a" href="/faq">FAQ</ListGroupItem>
                        <ListGroupItem tag="a" href="/mentionslegales">Mentions légales</ListGroupItem>
                    </ListGroup>
                    <ListGroup className="col-lg-3 col-md-6" flush>
                        <ListGroupItem className="text-white" tag="a">Suivez-nous</ListGroupItem>
                        <ListGroupItem tag="a" href="/acces">Accès</ListGroupItem>
                        <ListGroupItem tag="a" href="www.facebook.com/o_resto">Facebook</ListGroupItem>
                        <ListGroupItem tag="a" href="www.twitter.com/o_resto">Twitter</ListGroupItem>
                        <ListGroupItem tag="a" href="www.instagram.com/o_resto">Instagram</ListGroupItem>
                    </ListGroup>
                    <div className="text-center col-lg-3 col-md-6">
                        <img className="logo-footer" alt="logo o'resto" src={ logo }/>
                        <p className="text-white">2018 &copy; copyright o'resto</p>
                    </div>
                </div>
            </div>
        );
    }
}



export default Footer;
