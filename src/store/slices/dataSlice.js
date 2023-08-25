import {createSlice} from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        CommonPlan: [],
        Degree: [],
        Specialty: [],
        ApprovedCourses: [],
    },
    reducers: {
        updateApprovedCourses: (state, action) => {
            state.ApprovedCourses = [...state.ApprovedCourses, action.payload];
        },
        updateCommonPlan: (state, action) => {
            state.CommonPlan = [...state.CommonPlan, action.payload];
        },
        updateDegree: (state, action) => {
            state.Degree = [...state.Degree, action.payload];
        },
        updateSpecialty: (state, action) => {
            state.Specialty = [...state.Specialty, action.payload];
        }
    }
})

export const {updateApprovedCourses, updateCommonPlan, updateDegree, updateSpecialty} = dataSlice.actions;