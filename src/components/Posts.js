import React from 'react';

export default function Posts() {

    const postsInfo = [
        {
            userImage: 'assets/img/meowed.svg',
            userName: 'meowed',
            content: 'assets/img/gato-telefone.svg',
            likeImage: 'assets/img/respondeai.svg',
            likeName: 'respondeai',
            likesAmount: '101.523',
        },
        {
            userImage: 'assets/img/barked.svg',
            userName: 'barked',
            content: 'assets/img/dog.svg',
            likeImage: 'assets/img/adorable_animals.svg',
            likeName: 'adorable_animals',
            likesAmount: '99.159',
        }
    ];

    function Topo(props) {
        return (
            <div className="topo">
                <div className="usuario">
                    <img src={props.userImage} />
                    {props.userName}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
        )
    }
    
    function Post(props) {

        const [bookMark, setBookMark] = React.useState("bookmark-outline");

        function changeBookMark(bookMark) {
            !(bookMark === "bookmark") ? setBookMark("bookmark") : setBookMark("bookmark-outline")
        }

        function displayPostHeart(event) {
            const postHeart = event.currentTarget.firstChild;
            postHeart.style.animation = 'postHeartAnimation 0.5s';
            setTimeout(() => {
                postHeart.style.animation = null;
            },500);
        }

        return (
            <div className="post" onDoubleClick={displayPostHeart}>
                {/* heart used in the bonus screen post*/}
                <ion-icon name="heart" class='postHeart'></ion-icon>

                <Topo userImage={props.userImage} userName={props.userName} />
    
                <div className="conteudo">
                    <img src={props.content} />
                </div>
    
                <div className="fundo">
                    <div className="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name={bookMark} onClick={() => changeBookMark(bookMark)}></ion-icon>
                        </div>
                    </div>
    
                    <div className="curtidas">
                        <img src={props.likeImage} />
                        <div className="texto">
                            Curtido por <strong>{props.likeName}</strong> e <strong>outras {props.likesAmount} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="posts">
            {postsInfo.map((post,index) => <Post key={index} userImage={post.userImage} userName={post.userName} content={post.content}
                                           likeImage={post.likeImage} likeName={post.likeName} likesAmount={post.likesAmount} />)}
        </div>
    );
}

