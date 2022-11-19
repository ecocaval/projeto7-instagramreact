export default function Sugestoes() {

    const sugInfo = [
        {
            userImage: 'assets/img/meowed.svg',
            userName: 'meowed'
        },
        {
            userImage: 'assets/img/chibirdart.svg',
            userName: 'chibirdart'
        },
        {
            userImage: 'assets/img/razoesparaacreditar.svg',
            userName: 'razoesparaacreditar'
        },
        {
            userImage: 'assets/img/adorable_animals.svg',
            userName: 'adorable_animals'
        },
        {
            userImage: 'assets/img/smallcutecats.svg',
            userName: 'smallcutecats'
        },
    ];

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugInfo.map((sug => {
                return (
                    <Sugestao key={sug.userName} userImage={sug.userImage} userName={sug.userName}/>
                )
            }))}
        </div>
    );
}

function Sugestao(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.userImage} />
                <div className="texto">
                    <div className="nome">{props.userName}</div>
                    <div className="razao">Segue você</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    );
}