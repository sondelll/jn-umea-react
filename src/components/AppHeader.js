

const AppHeader = () => {
    return(
        <header
        style={{
            width:'100%',
            backgroundColor:'#384e8a',
            height:'12vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            marginBottom:'2em'
        }}
        >
            <p
                style={{
                    color:'white',
                    letterSpacing:'2em',
                    wordSpacing:'-5em',
                    fontSize:'2em',
                    fontWeight:'bold',
                    textAlign:'center'
                }}
            > HEADER</p>
        </header>
    )
}

export default AppHeader;