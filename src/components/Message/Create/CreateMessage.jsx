import * as React from 'react';
import {Card, Grid, Paper, TextField} from '@mui/material';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useRef, useState} from "react";
import Typography from "@mui/material/Typography";

/*Colores que me han gustado
* #484d6d -> Independence (Bar)
* #57A773 -> Forest green crayola (Send Message, Status: Ok Buttons)
* #EFE9F4 -> Magnolia (Background)
* #08B2E3 -> Cyan Process (Default Buttons)
* #EE6352 -> Fire Opal (Not Ok buttons)
* */

async function sendMessage(url = '', data = {}) {
    console.log(data)
    const response = await fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )
    return response.json()
}

function CreateMessage() {
    const [value, setValue] = useState('');
    const SetTitleBox = ({children}) => (
        <Box sx={{pt: 0.3}}>
            {children}
            <hr/>
        </Box>
    );
    const SetFirstBox = ({children}) => (
        <Box sx={{pt: 1, pb: 1}}>
            {children}
        </Box>
    );

    const SetSecondBox = ({children}) => (
        <Box sx={{p: 0.5}}>
            {children}
        </Box>
    );

    const InputBox = (props) => (
        <TextField onBlur={(e) => {
            setValue(e.target.value);
        }} size={"small"} defaultValue={value} fullWidth id="outlined-basic" label="Inserte texto" variant="outlined"/>
    );

    const SetTitle = ({title, variant}) => (
        <Typography align={"center"} variant={variant}
                    noWrap
                    sx={{
                        mr: 0,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.2rem',
                        color: 'secondary',
                        textDecoration: 'none',
                        fontSize: 30
                    }}>
            {title}
        </Typography>
    );

    const Render = (props) => (
        <SetFirstBox children={<Paper elevation={5}>
            <SetTitleBox>
                <SetTitle title={"Crear Mensaje"} variant={"h6"}/>
            </SetTitleBox>
            <SetFirstBox>
                <Grid container alignItems={"center"} justifyContent={"center"}>
                    <Grid item xs={8}>
                        <SetSecondBox children={
                            <InputBox/>
                        }></SetSecondBox>
                    </Grid>
                    <Grid item>
                        <SetSecondBox children={
                            <>
                                <Grid container justifyContent={"left"} spacing={1}>
                                    <Grid item>
                                        <Button variant="outlined" onClick={() => {
                                            sendMessage('https://c0ff7f93c321.ngrok.io/send-message', {
                                                idChat: 2090444260,
                                                message: value
                                            }).then(r => console.log(value))
                                        }}>
                                            Enviar
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button color={"secondary"} variant="contained" onClick={() => {
                                            setValue("")
                                        }}>
                                            Borrar
                                        </Button>
                                    </Grid>
                                </Grid>

                            </>


                        }>
                        </SetSecondBox>
                    </Grid>
                </Grid>
            </SetFirstBox>

        </Paper>}>
        </SetFirstBox>
    )

    return (
        <Render></Render>
    );
}

export default CreateMessage;