import React, { useState, useEffect } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { useQuery } from "react-query";
import { getUsers, getPhotos } from "../api";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const ReactQueryTable = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([]);
    const [rowPhotos, setRowPhotos] = useState([]);

    const users = useQuery("getUsers", getUsers);
    const photos = useQuery("getPhotos", getPhotos);

    useEffect(() => {
        if (!users.isLoading && !users.error) {
            setRowData(
                users.data.map((user) => ({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }))
            );
        }
    }, [users]);

    useEffect(() => {
        if (!photos.isLoading && !photos.error) {
            setRowPhotos(
                photos.data.map((photo) => ({
                    id: photo.id,
                    title: photo.title,
                    url: photo.url,
                }))
            );
        }
    }, [photos]);

    return (
        <div className="ag-theme-alpine" style={{ height: 400 }}>
            <AgGridReact rowData={rowData}>
                <AgGridColumn field="id"></AgGridColumn>
                <AgGridColumn field="name"></AgGridColumn>
                <AgGridColumn field="email"></AgGridColumn>
            </AgGridReact>
            <AgGridReact rowData={rowPhotos}>
                <AgGridColumn field="id"></AgGridColumn>
                <AgGridColumn field="title"></AgGridColumn>
                <AgGridColumn field="url"></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

export default ReactQueryTable;
