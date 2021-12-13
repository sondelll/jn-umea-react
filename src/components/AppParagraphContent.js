import {Card, Typography} from '@mui/material'

const AppParagraphContent = () => {
    return (
        <Card
            variant='elevation'
            sx={{
                backgroundColor:'secondary.light',
                marginY:'4em',
                marginX:'6em',
                width:'32em',
                height:'44em',
                borderRadius:'1em',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
            }} 
        >
            <Typography variant='p'
            sx={{
                fontSize:'4em',
                fontWeight:'bold',
                color:'white'
            }}
            >
                Card
            </Typography>
            <Typography variant='p'
                sx={{
                    fontSize:'1.5em',
                    color:'white'
                }}
            >
                (Material UI)
            </Typography>
        </Card>
    )
}

export default AppParagraphContent;