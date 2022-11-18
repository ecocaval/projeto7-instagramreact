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
        <div class="stories">            
            {storiesInfo.map(storie => {
                return(
                    <div class="story">
                        <div class="imagem">
                            <img src={storie.image}/>
                        </div>
                        <div class="usuario">
                            {storie.userName}  
                        </div>
                    </div>
                )
            })}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}