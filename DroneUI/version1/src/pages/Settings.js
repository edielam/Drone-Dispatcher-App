import React from 'react';
import { makeStyles } from '@mui/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  input: {
    margin: theme.spacing(1),
  },
}));

const Settings = () => {
  const classes = useStyles();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [language, setLanguage] = useState('');
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleNotificationsChange = (event) => {
    setNotificationsEnabled(event.target.checked);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleDarkModeChange = (event) => {
    setDarkModeEnabled(event.target.checked);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={notificationsEnabled}
              onChange={handleNotificationsChange}
              color="primary"
            />
          }
          label="Enable Notifications"
        />
      </FormGroup>
      <FormControl className={classes.formControl}>
        <InputLabel id="language-select-label">Language</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={language}
          onChange={handleLanguageChange}
        >
          <MenuItem value="english">English</MenuItem>
          <MenuItem value="french">French</MenuItem>
          <MenuItem value="spanish">Spanish</MenuItem>
        </Select>
      </FormControl>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={darkModeEnabled}
              onChange={handleDarkModeChange}
              color="primary"
            />
          }
          label="Enable Dark Mode"
        />
      </FormGroup>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="component-simple">Username</InputLabel>
        <Input id="component-simple" className={classes.input} />
      </FormControl>
    </div>
  );
        }  
export default Settings;
