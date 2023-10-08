import {useDispatch, useSelector} from "react-redux";
import {reset, updateCommonPlan, updateDegree, updateSpecialty} from "../store/slices/dataSlice.js";
import {useEffect} from "react";

export const FirstTimeSetUp = (specialty) => {
    const {Specialties} = useSelector(state => state.data);
    const semesters = Object.keys(Specialties[specialty.slice(1)]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reset());

        for (let i = 0; i < semesters.length; i++) {
            if (i < 4) {
                dispatch(updateCommonPlan(Specialties[specialty.slice(1)][semesters[i]]));
            }
            else if (i >= 4 && i < 8) {
                dispatch(updateDegree(Specialties[specialty.slice(1)][semesters[i]]));
            }
            else if (i >= 8 && i < 11) {
                dispatch(updateSpecialty(Specialties[specialty.slice(1)][semesters[i]]));
            }
        }
    }, []);
}