import React from 'react';
import Menu from '../Menu';

const Apropos = () => {
    return (
        <div>
            <Menu/>
            <h1>A propos</h1>
            <h5>Qu’est-ce que React ?</h5>

            <p className=''>
           
React.js, communément appelé simplement React, est une bibliothèque JavaScript utilisée pour construire des interfaces utilisateur. Chaque application web React est composée de composants réutilisables qui constituent des parties de l’interface utilisateur – nous pouvons avoir un composant distinct pour notre barre de navigation, un pour le pied de page, un autre pour le contenu principal, et ainsi de suite. Vous comprendrez mieux cela lorsque nous arriverons à la section où nous devons travailler avec des composants.

Le fait de disposer de ces composants réutilisables facilite le développement car nous n’avons pas à répéter le code récurrent. Il nous suffit de créer sa logique et d’importer le composant dans n’importe quelle partie du code où il est nécessaire.

React est également une application à page unique. Ainsi, au lieu d’envoyer une requête au serveur à chaque fois qu’une nouvelle page doit être rendue, le contenu de la page est chargé directement à partir des composants React. Cela conduit à un rendu plus rapide sans rechargement de la page.

Dans la plupart des cas, la syntaxe utilisée pour construire des applications React est appelée JSX (JavaScript XML), qui est une extension syntaxique de JavaScript. Cela nous permet de combiner la logique JavaScript et la logique de l’interface utilisateur d’une manière unique. Avec JSX, nous éliminons le besoin d’interagir avec le DOM en utilisant des méthodes comme document.getElementById, querySelector, et d’autres méthodes de manipulation du DOM.

Bien que l’utilisation de JSX ne soit pas obligatoire, elle facilite le développement des applications React.
            </p>
        </div>
    );
};

export default Apropos;