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

        const [likesAmount, setLikesAmount] = React.useState(props.likesAmount);
        const [bookMark, setBookMark] = React.useState("bookmark-outline");

        function likePost(heartIcon) {
            heartIcon.name = 'heart';
            heartIcon.style.color = 'red';
        }

        function dislikePost(heartIcon) {
            heartIcon.name = 'heart-outline';
            heartIcon.style.color = null;
        }

        function changeBookMark(bookMark) {
            !(bookMark === "bookmark") ? setBookMark("bookmark") : setBookMark("bookmark-outline")
        }

        function likeDislikePost(event) {

            const postHeart = event.currentTarget.offsetParent.firstChild;
            
            let heartIconHTML;
            let postIsAlreadyLiked = false;
            
            // case #1 - like triggered through post image
            if(event.currentTarget.classList.contains('conteudo')) {
                heartIconHTML = event.currentTarget.offsetParent.childNodes[3].firstChild.firstChild.firstChild;
                (heartIconHTML.name === 'heart') ? (postIsAlreadyLiked = true) : (postIsAlreadyLiked = false);
                likePost(heartIconHTML);
            } else {
            // case #2 - like triggered through like button                
                heartIconHTML = event.currentTarget;
                !(heartIconHTML.name === 'heart') ? likePost(heartIconHTML) : dislikePost(heartIconHTML)
            }
            
            // displays the heart animation in the center of the post, only triggered when liking posts, and not when disliking it
            if(heartIconHTML.name === 'heart') {
                const incrementedNum = String(Number(likesAmount.replaceAll(".",""))+1);
                const numSize = likesAmount.replaceAll(".","").length;
            
                if(!postIsAlreadyLiked) {
                    setLikesAmount(incrementedNum.slice(0,(Math.floor(numSize/2))) + '.' + incrementedNum.slice(-3)) ;
                } 
                postHeart.style.animation = 'postHeartAnimation 0.5s';
                setTimeout(() => {
                    postHeart.style.animation = null;
                }, 500);            
            } else {
                const decrementedNum = String(Number(likesAmount.replaceAll(".",""))-1);
                const numSize = likesAmount.replaceAll(".","").length;

                setLikesAmount(decrementedNum.slice(0,(Math.floor(numSize/2))) + '.' + decrementedNum.slice(-3));
            }
        }

        return (
            <div className="post" data-test="post">
                {/* heart used in the bonus screen post*/}
                <ion-icon name="heart" class='postHeart'></ion-icon>

                <Topo userImage={props.userImage} userName={props.userName} />
    
                <div className="conteudo" onDoubleClick={likeDislikePost}>
                    <img src={props.content} data-test="post-image"/>
                </div>
    
                <div className="fundo">
                    <div className="acoes">
                        <div>
                            <ion-icon name="heart-outline" onClick={likeDislikePost} data-test="like-post"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name={bookMark} onClick={() => changeBookMark(bookMark)} data-test="save-post"></ion-icon>
                        </div>
                </div>
    
                    <div className="curtidas">
                        <img src={props.likeImage} />
                        <div className="texto">
                            Curtido por <strong>{props.likeName}</strong> e <strong>outras <span data-test="likes-number">{likesAmount}</span> pessoas</strong>
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

