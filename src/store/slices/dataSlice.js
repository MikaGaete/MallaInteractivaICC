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
        ApprovedCourses: {ICC: JSON.parse(localStorage.getItem('ICC-AP')) || [] ,ICQ: JSON.parse(localStorage.getItem('ICQ-AP')) || []},
        ApprovedCredits: {ICC: JSON.parse(localStorage.getItem('ICC-AC')) || 0 ,ICQ: JSON.parse(localStorage.getItem('ICQ-AC')) || 0}
    },
    reducers: {
        updateApprovedCourses: (state, action) => {
            if (!state.ApprovedCourses[action.payload.specialty].includes(action.payload.code)) {
                state.ApprovedCourses[action.payload.specialty] = [...state.ApprovedCourses[action.payload.specialty], action.payload.code];
                state.ApprovedCredits[action.payload.specialty] = state.ApprovedCredits[action.payload.specialty] + action.payload.credits;
            }
            else {
                const tempArray = state.ApprovedCourses[action.payload.specialty];
                for (let i = 0; i < state.ApprovedCourses[action.payload.specialty].length; i++) {
                    if (state.ApprovedCourses[action.payload.specialty][i] === action.payload.code) {
                        tempArray.splice(i, 1);
                    }
                }
                state.ApprovedCourses[action.payload.specialty] = tempArray;
                state.ApprovedCredits[action.payload.specialty] = state.ApprovedCredits[action.payload.specialty] - action.payload.credits;
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
            localStorage.removeItem(`${action.payload}-AP`);
            localStorage.removeItem(`${action.payload}-AC`);
            localStorage.setItem(`${action.payload}-AP`, JSON.stringify(state.ApprovedCourses[action.payload]));
            localStorage.setItem(`${action.payload}-AC`, JSON.stringify(state.ApprovedCredits[action.payload]));
        },
        reset: (state, action) => {
            state.CommonPlan = [];
            state.Degree = [];
            state.Specialty = [];
        },
        setPreRequisites: (state, action) => {
            state.PreRequisites = action.payload;
        },
        deletePreRequisites: (state, action) => {
            console.log('wa')
            state.PreRequisites = [];
        }
    }
})

export const {updateApprovedCourses, updateCommonPlan, updateDegree, updateLocalSave, updateSpecialty, reset, setPreRequisites, deletePreRequisites} = dataSlice.actions;