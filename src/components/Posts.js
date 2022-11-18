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

    return (
        <div class="posts">
            {postsInfo.map(post => <Post userImage={post.userImage} userName={post.userImage} content={post.content}
                likeImage={post.likeImage} likeName={post.likeName} likesAmount={post.likesAmount} />)}
        </div>
    );
}

function Post(props) {

    function Topo(props) {
        return (
            <div class="topo">
                <div class="usuario">
                    <img src={props.userImage} />
                    {props.userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
        );
    }

    return (
        <div class="post">
            <Topo userImage={props.userImage} userName={props.userName} />

            <div class="conteudo">
                <img src={props.content} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likeImage} />
                    <div class="texto">
                        Curtido por <strong>{props.likeName}</strong> e <strong>outras {props.likesAmount} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}