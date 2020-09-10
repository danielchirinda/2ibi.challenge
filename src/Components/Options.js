import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Convert from './Convert';
import CsvDownload from 'react-json-to-csv'
import exportFromJSON from 'export-from-json'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function Options(props) {



    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
      });
    const [mockdata,setMockData] = useState([])

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

const downloadXLS = () =>{
    {exportFromJSON({ data: props.mockdata, fileName: 'data', exportType: exportFromJSON.types.xls })}

}

const downloadXML = () =>{
    {exportFromJSON({ data: props.mockdata, fileName: 'data', exportType: exportFromJSON.types.xml })}

}

const downloadCSV = () =>{
    {exportFromJSON({ data: props.mockdata, fileName: 'data', exportType: exportFromJSON.types.csv })}

}
  return (
      <div>
    <div >

    <Button color="primary"  ></Button>

    <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<ImportExportIcon/>}
        onClick={downloadXLS}
    >
        Download no Formarto XLS
      </Button>

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<ImportExportIcon/>}
        onClick={downloadCSV}
    >
        Download no Formarto CSV
      </Button>

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<ImportExportIcon/>}
        onClick={downloadXML}
    >
        Download no Formarto XML
      </Button>

    </div>

    </div>
   
  );
}
