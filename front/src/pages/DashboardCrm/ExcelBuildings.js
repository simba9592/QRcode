import React, { useEffect, useState } from "react";  
import { read, utils, writeFile } from 'xlsx';
import { useSelector, useDispatch } from "react-redux";
import { getBuilding } from "../../store/actions";

const ExcekBuildings = () => {
    const dispatch = useDispatch();
    const data = {user: "customerlist"};
    useEffect(() => {
        dispatch(getBuilding(data));
    }, []);

    const { building, userListError } = useSelector(state => ({
        building: state.getBuildingDetails.buildingdata,
    }));

    console.log(building, "building")

    return (
        <>

            <div className="row" style={{paddingTop:"100px"}}>
                <div className="col-sm-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">BldgID</th>
                                <th scope="col">BldgName</th>
                                <th scope="col">Region</th>
                                <th scope="col">BldgOrder</th>
                                <th scope="col">BldgAddress</th>
                                <th scope="col">ApartmentAvailable</th>
                            </tr>
                        </thead>
                        <tbody> 
                                {
                                    building
                                    ?
                                    building.map((building, index) => (
                                        <tr key={index}>
                                            <th scope="row">{ building.BldgID }</th>
                                            <td>{ building.BldgName }</td>
                                            <td>{ building.Region }</td>
                                            <td>{ building.BldgOrder }</td>
                                            <td>{ building.BldgAddress }</td>
                                            <td>{ building.ApartementAvailable }</td>
                 
                                           
                                            <td><span className="badge bg-warning text-dark">{ building.Rating }</span></td>
                                        </tr> 
                                    ))
                                    :
                                    <tr>
                                        <td colSpan="5" className="text-center">No buildings Found.</td>
                                    </tr> 
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
};

export default ExcekBuildings;