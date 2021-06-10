import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
const Signup = () => {
  const paperstyle = {padding: 15, width: 260, margin: "2 auto"}
  const headerstyle = { margin: 0 }
  const radiostyle = { display: 'initial' }
  const marginTop = { marginTop: 5 }
  return (
    <Grid>
      <Paper elevation={20} style={paperstyle}>
        <Grid align='center'>
          <Avatar />
          <h2 style={headerstyle}>Sign Up</h2>
          <Typography variant='caption' gutterBottom>
            Please fill this form to create new account!!
              </Typography>
        </Grid>
        <form>
          <TextField fullWidth label='Name'></TextField><br />
          <TextField fullWidth label='Email'></TextField><br /><br />
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender" style={radiostyle} >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField fullWidth label='Phnone Number'></TextField><br />
          <TextField fullWidth label='Password'></TextField><br />
          <TextField fullWidth label='Conform Password'></TextField><br /><br />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions"
          /><br />
          <Button type='submit' variant='contained' color='primary'>SignUp</Button>
        </form>
      </Paper>
    </Grid>
  )
}
export default Signup;