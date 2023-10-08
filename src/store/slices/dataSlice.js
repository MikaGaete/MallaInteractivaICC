import {createSlice} from "@reduxjs/toolkit";
import {ColorDataICC, ColorDataICQ, DataICC, DataICQ} from "../../Data/DataExport.jsx";


export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        CommonPlan: [],
        Degree: [],
        Specialty: [],
        PreRequisites: [],
        Specialties: {ICC: DataICC, ICQ: DataICQ},
        Colors: {ICC: ColorDataICC, ICQ: ColorDataICQ},
        Titles: {ICC: 'Ingeniería Civil en Computación', ICQ: 'Ingeniería Civil Química'},
        ApprovedCourses: JSON.parse(localStorage.getItem('MI-MallaUniversal-AP')) || [],
        ApprovedCredits: JSON.parse(localStorage.getItem('MI-MallaUniversal-AC')) || 0
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
            localStorage.removeItem('MI-MallaUniversal-AP');
            localStorage.removeItem('MI-MallaUniversal-AC');
            localStorage.setItem('MI-MallaUniversal-AP', JSON.stringify(state.ApprovedCourses));
            localStorage.setItem('MI-MallaUniversal-AC', JSON.stringify(state.ApprovedCredits));
        },
        reset: (state, action) => {
            state.CommonPlan = [];
            state.Degree = [];
            state.Specialty = [];
        }
    }
})

export const {updateApprovedCourses, updateCommonPlan, updateDegree, updateLocalSave, updateSpecialty, reset} = dataSlice.actions;