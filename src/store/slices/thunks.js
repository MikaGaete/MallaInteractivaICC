import {updateApprovedCourses, updateLocalSave} from "./dataSlice.js";

export const UpdateApprovedCourse = (data) => {
    return async (dispatch) => {
        dispatch(updateApprovedCourses(data));
        dispatch(updateLocalSave());
    }
}