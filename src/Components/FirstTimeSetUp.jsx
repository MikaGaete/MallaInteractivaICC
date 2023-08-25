import {useDispatch} from "react-redux";
import data from '../Data/data.json';
import {updateCommonPlan, updateDegree, updateSpecialty} from "../store/slices/dataSlice.js";
import {useEffect} from "react";

export const FirstTimeSetUp = () => {
    const semesters = Object.keys(data);
    const dispatch = useDispatch();

    useEffect(() => {
        for (let i = 0; i < semesters.length; i++) {
            if (data[semesters[i]][0][3] === 'PC') {
                dispatch(updateCommonPlan(data[semesters[i]]));
            }
            else if (data[semesters[i]][0][3] === 'Lic') {
                dispatch(updateDegree(data[semesters[i]]));
            }
            else if (data[semesters[i]][0][3] === 'Esp' || data[semesters[i]][0][3] === 'ElecEsp') {
                dispatch(updateSpecialty(data[semesters[i]]));
            }
        }
    }, []);
}