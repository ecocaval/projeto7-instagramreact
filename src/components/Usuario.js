import React from 'react';

export default function Usuario() {

    const userTag = "catanacomics";
    const [userName, setUserName] = React.useState("Catana");
    const [userImage, setUserImage] = React.useState("assets/img/catanacomics.svg");

    function inserirNome() {
        const nameToTry = prompt("Redefina o seu nome de usuário:");
        if(nameToTry) {
            setUserName(nameToTry);
        }
    }

    function inserirImagem() {
        const imageLink = prompt("Redefina a sua imagem de usuário:");
        if(imageLink) {
            setUserImage(imageLink);
        }
    }
    
    function Usuario(props) {
        return (
            <div className="usuario" data-test="user">
                <img src={userImage} onClick={inserirImagem} data-test="profile-image"/>
                <div className="texto">
                    <strong>{props.userTag}</strong>
                    <span>
                        <span data-test="name">
                            {props.userName}
                        </span>
                        <ion-icon name="pencil" onClick={inserirNome} data-test="edit-name"></ion-icon>   
                    </span>
                </div>
            </div>
        )
    }

    return (
        <Usuario userTag={userTag} userName={userName} />
    )
}