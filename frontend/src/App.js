import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import moment from "moment";
import numeral from "numeral";

import api from "./api";
import "./styles.scss";

function App() {
  const [clientes, setClientes] = useState([]);

  const effectClientes = () => {
    fetch(`${api}clientes/inadimplentes`)
      .then((res) => res.json())
      .then((data) => {
        setClientes(data);
      })
      .catch(console.log);
  };
  useEffect(effectClientes, []);

  const columnDefs = [
    { headerName: "Nome", field: "nome", sortable: true },
    {
      headerName: "Valor",
      field: "valor",
      sortable: true,
    },
    {
      headerName: "Desde",
      field: "desde",
      cellRenderer: (data) => {
        return moment(data.desde).format("MM/DD/YYYY");
      },
      sortable: true,
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <h1>Clientes Inadimplentes</h1>
        <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
          <AgGridReact rowData={clientes} columnDefs={columnDefs}></AgGridReact>
        </div>
      </div>
    </div>
  );
}

export default App;
