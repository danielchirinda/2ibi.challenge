import React, { useState } from 'react';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import exportFromJSON from 'export-from-json'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import ImportExportIcon from '@material-ui/icons/ImportExport';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Options(props) {

  const classes = useStyles();
  const [state, setState] =useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });
  const [mockdata, setMockData] = useState([])

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const downloadXLS = () => {
    { exportFromJSON({ data: props.mockdata, fileName: 'data', exportType: exportFromJSON.types.xls }) }

  }

  const downloadXML = () => {
    { exportFromJSON({ data: props.mockdata, fileName: 'data', exportType: exportFromJSON.types.xml }) }

  }

  const downloadCSV = () => {
    { exportFromJSON({ data: props.mockdata, fileName: 'data', exportType: exportFromJSON.types.csv }) }

  }
  return (
    <div>
      <div >

        <Button color="primary"  ></Button>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<ImportExportIcon />}
          onClick={downloadXLS}
        >
          Exportar no Formarto XLS
      </Button>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<ImportExportIcon />}
          onClick={downloadCSV}
        >
          Exportar no Formarto CSV
      </Button>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<ImportExportIcon />}
          onClick={downloadXML}
        >
          Exportar no Formarto XML
      </Button>

      </div>

    </div>

  );
}
