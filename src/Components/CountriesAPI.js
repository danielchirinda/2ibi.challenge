import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Options from './Options';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Modal, Button } from '@material-ui/core';

const columns = [
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'capital', label: 'Capital', minWidth: 100 },
  { id: 'region', label: 'Region', minWidth: 100 },
  { id: 'subRegion', label: 'Sub Region', minWidth: 100 },
  { id: 'population', label: 'Population', minWidth: 100 },
  { id: 'area', label: 'Area', minWidth: 100 },
  { id: 'timezone', label: 'timezone', minWidth: 100 },
  { id: 'nativeName', label: 'native Name', minWidth: 100 },
  { id: 'flag', label: 'Link Bandeira', minWidth: 100 },
  
];
let rows= []

function createData(name, capital, region,subRegion,population,area,timezone,nativeName,flag) {
  return { name, capital, region, subRegion, population,area,timezone,nativeName,flag};
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});


export default function CountriesAPI() {

    const [page, setPage] =useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [ima,setIma] = useState('')
    const [countries,setCountries] = useState([])
    const [modalInfo,setModalInfo] = useState('')
    const [showModal,setShowModal] = useState(false)
    const [show,setShow] = useState(false)
    const classes = useStyles();
  
     
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const handleClose = () =>{
      setShow(false)
    }

    const handleShow = () =>{
      setShow(true)
    }

    const toggleTrueFalse = () =>{
      setShowModal(handleShow)
    }

    async function getData() {

      let response = await axios.get('https://restcountries.eu/rest/v2');
      let user = await response.data
      return user;
}



const rowsEvent = (event) => {
console.log(event.target.innerText)
let da  = event.target.innerText
setModalInfo(da)
toggleTrueFalse()

}

    const ModalContent = () =>{
      return (
        <div>
        <Modal onHide={handleClose} open={show}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Daniel
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              asdslkdaslkj
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose} >Close</Button>
            </Modal.Footer>
        </Modal>
        </div>
      )
    }

useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2').then(
            response => {
               setCountries(response.data)
            } 
        ).catch(error =>{ 
            console.log(error)
    }
        )
    },[])   


var dados = getData()
     
dados.then(function(dados){
    for (let index = 0; index < dados.length-1; index++) {
        rows.push(createData(dados[index].name,dados[index].capital,dados[index].region,dados[index].subregion,dados[index].population,dados[index].area,dados[index].timezones[0],dados[index].nativeName,dados[index].flag));
        
    }

 })


if(rows.length < 1 ){
return(
    <div>
        <div className={classes.root}>
      <CircularProgress disableShrink />
    </div>
    </div>
)
}else{
  return (
      <div>
        <div>
          <div className={classes.section4} ><Options mockdata={rows} ></Options></div>
          <h2></h2>
        </div>
    <Paper className={classes.root} >
      <TableContainer className={classes.container}  >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover   role="checkbox" tabIndex={-1} key={row.id} >
                  {columns.map((column) => {
                    const value = row[column.id];
                    if(column.id === "flag"){
                    }
                    return (
                      <TableCell onClick={rowsEvent} key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : 
                        value }
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    {show ? <ModalContent></ModalContent> : null}
    </div>
  )
 
}
}
