import {createSlice} from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        CommonPlan: [],
        Degree: [],
        Specialty: [],
        ApprovedCourses: JSON.parse(localStorage.getItem('MI-ICC-AP')) || [],
        ApprovedCredits: JSON.parse(localStorage.getItem('MI-ICC-AC')) || 0
    },
    reducers: {
        updateApprovedCourses: (state, action) => {
            if (!state.ApprovedCourses.includes(action.payload.code)) {
                state.ApprovedCourses = [...state.ApprovedCourses, action.payload.code];
                state.ApprovedCredits = state.ApprovedCredits + action.payload.credits;
            }
            else {
                const tempArray = state.ApprovedCourses;
                for (let i = 0; i < state.ApprovedCourses.length; i++) {
                    if (state.ApprovedCourses[i] === action.payload.code) {
                        tempArray.splice(i, 1);
                    }
                }
                state.ApprovedCourses = tempArray;
                state.ApprovedCredits = state.ApprovedCredits - action.payload.credits;
            }
        },
        updateCommonPlan: (state, action) => {
            state.CommonPlan = [...state.CommonPlan, action.payload];
        },
        updateDegree: (state, action) => {
            state.Degree = [...state.Degree, action.payload];
        },
        updateSpecialty: (state, action) => {
            state.Specialty = [...state.Specialty, action.payload];
        },
        updateLocalSave: (state, action) => {
            localStorage.removeItem('MI-ICC-AP');
            localStorage.removeItem('MI-ICC-AC');
            console.log('aaaaaaaaaaaa')
            localStorage.setItem('MI-ICC-AP', JSON.stringify(state.ApprovedCourses));
            localStorage.setItem('MI-ICC-AC', JSON.stringify(state.ApprovedCredits));
        }
    }
})

export const {updateApprovedCourses, updateCommonPlan, updateDegree, updateLocalSave, updateSpecialty} = dataSlice.actions;