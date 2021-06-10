
import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const Login = () => {

    const paperstyle = { padding :15,height:'73vh',width:260, margin:"2 auto"}
    const avatar = { backgroundColor: 'blue' }
    return (
        <Grid>
            <Paper elevation={20} style={paperstyle}>
                <Grid align='center'>
                    <Avatar style={avatar}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter Username' fullWidth required></TextField>
                <br />
                <br />
                <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required></TextField>
                <br /><br />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember Me"
                />
                <br />
                <br />
                <Button type='submit' color='primary' fullWidth variant="contained" margin='20px 0'>Sign In</Button>
                <Typography>
                    <Link href="#">
                        Forgot Password ?
                    </Link>
                </Typography>
                <Typography>Create new account:
                    <Link href="/signup">
                        Sign up
                    </Link>
                </Typography>

            </Paper>
        </Grid>

    )
}

export default Login;