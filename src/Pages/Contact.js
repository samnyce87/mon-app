import React from 'react';
import Menu from '../Menu';
function Contact(props) {
    return (
        
      <div className='card card-body mb-3'>
        <Menu/>
                <h4>{this.props.nom}</h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        Prénom: {this.props.prenom}
                    </li>
                    <li className='list-group-item'>
                        Email: {this.props.email}
                    </li>
                    <li className='list-group-item'>
                        Téléphone: {this.props.tel}
                    </li>
                </ul>
            </div>
        );
    }

export default Contact;

