import { Box, Card, CardContent, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { styles } from './Styles'
const useStyles=makeStyles(styles);
export default function Login() {
    const classes=useStyles();
  return (
    <>
        <Grid container className={classes.fromContainer}>
        <Grid item xs={12} sm={9}>
        <form>
            <Paper component={Box} mb={1} p={2}>
            <Box>
                <Typography variant='h6' color='primary'>
                login from {" "}
                </Typography>
            </Box>
            {/* row */}
            <Grid container>
            <Grid xs={12} sm={7}>
            <Card>
                <CardContent>
                <TextField id="standard-basic" label="Standard" />
                </CardContent>
            </Card>
            </Grid>
            <Grid xs={12} sm={7}>
            <Card>
                <CardContent>
                <TextField id="standard-basic" label="Standard" />
                </CardContent>
            </Card>
            </Grid>
            </Grid>
            </Paper>
        </form>
        </Grid>
        </Grid>
    </>
  )
}
