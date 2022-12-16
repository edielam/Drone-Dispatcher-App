import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const AvailableDrones = () => {
  const classes = useStyles();
  const [drones, setDrones] = useState([]);

  useEffect(() => {
    async function fetchDrones() {
      const res = await fetch('/api/drones?state=IDLE&state=RETURNING');
      const data = await res.json();
      setDrones(data);
    }
    fetchDrones();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="available drones">
        <TableHead>
          <TableRow>
            <TableCell>Serial Number</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Weight Limit</TableCell>
            <TableCell>Battery Capacity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {drones.map((drone) => (
            <TableRow key={drone.serialNumber}>
              <TableCell component="th" scope="row">
                {drone.serialNumber}
              </TableCell>
              <TableCell>{drone.model}</TableCell>
              <TableCell>{drone.weightLimit}</TableCell>
              <TableCell>{drone.batteryCapacity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AvailableDrones;
