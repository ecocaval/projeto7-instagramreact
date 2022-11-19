export default function Stories() {

    const storiesInfo = [
        {
            image: 'assets/img/9gag.svg',
            userName: '9gag'
        },
        {
            image: 'assets/img/meowed.svg',
            userName: 'meowed'
        },
        {
            image: 'assets/img/barked.svg',
            userName: 'barked'
        },
        {
            image: 'assets/img/nathanwpylestrangeplanet.svg',
            userName: 'nathanwpylestrangeplanet'
        },
        {
            image: 'assets/img/wawawicomics.svg',
            userName: 'wawawicomics'
        },
        {
            image: 'assets/img/respondeai.svg',
            userName: 'respondeai'
        },
        {
            image: 'assets/img/filomoderna.svg',
            userName: 'filomoderna'
        },
        {
            image: 'assets/img/memeriagourmet.svg',
            userName: 'memeriagourmet'
        }
    ]

    return(
        <div className="stories">            
            {storiesInfo.map(storie => {
                return(
                    <Story key={storie.userName} image={storie.image} userName={storie.userName}/>
                )
            })}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.image} />
            </div>
            <div className="usuario">
                {props.userName}
            </div>
        </div>
    );
}
