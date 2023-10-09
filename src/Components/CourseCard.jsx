import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {UpdateApprovedCourse} from "../store/slices/thunks.js";
import {useHover} from "react-aria";
import {deletePreRequisites, setPreRequisites} from "../store/slices/dataSlice.js";

// eslint-disable-next-line react/prop-types
export const CourseCard = ({details, specialty}) => {
    let { hoverProps } = useHover({
        onHoverStart: (e) => {
            dispatch(setPreRequisites(details[4]));
        },
        onHoverEnd: (e) => {
            dispatch(deletePreRequisites());
        }
    });
    const {ApprovedCourses, PreRequisites} = useSelector(state => state.data);
    const dispatch = useDispatch();
    const [unlocked, setUnlocked] = useState(false);
    const [approved, setApproved] = useState(false);
    const [hovered, setHovered] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(UpdateApprovedCourse({code: details[1], credits: details[2], specialty: specialty}));
        setApproved(!approved);
    }

    useEffect(() => {
        if (PreRequisites.includes(details[1])) {
            setHovered(true);
        }
        else setHovered(false);
    }, [PreRequisites]);

    const checkUnlocked = (approvedCourses, preRequisites) => preRequisites.every(v => approvedCourses.includes(v));

    useEffect(() => {
        if (ApprovedCourses[specialty].includes(details[1])) setApproved(true);
        if (checkUnlocked(ApprovedCourses[specialty], details[4])) setUnlocked(true);
        else setUnlocked(false);
    }, [ApprovedCourses[specialty]]);

    return (
        <div onClick={handleClick} {...hoverProps} className={`w-full h-28 flex flex-col justify-around text-md font-semibold text-center gap-0.5 px-1 ${hovered ? 'bg-secondary-400 brightness-100' : null } ${unlocked || hovered ? 'hover:cursor-pointer brightness-100' : 'hover:cursor-default brightness-50' }  ${details[3] === 'PC' && !approved ? `bg-PC` : null} ${details[3] === 'ElecEsp' && !approved ? `bg-ElecEsp` : null} ${details[3] === 'Esp' && !approved ? `bg-Esp` : null} ${details[3] === 'ElecLic' && !approved ? `bg-ElecLic` : null} ${details[3] === 'Lic' && !approved ? `bg-Lic` : null} ${details[3] === 'FG' && !approved ? `bg-FG` : null} ${details[3] === 'IN' && !approved ? `bg-IN` : null} ${details[3] === 'TI' && !approved ? `bg-TI` : null} ${details[3] === 'PF' && !approved ? `bg-PF` : null} ${approved ? `bg-AP` : null} `} >
            <div>{details[1]}</div>
            <div className={'line-clamp-2'}>{details[0]}</div>
            <div>{details[2]} creditos</div>
        </div>
    );
}