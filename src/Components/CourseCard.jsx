import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {updateApprovedCourses} from "../store/slices/dataSlice.js";

// eslint-disable-next-line react/prop-types
export const CourseCard = ({details}) => {
    const {ApprovedCourses} = useSelector(state => state.data);
    const dispatch = useDispatch();
    const [unlocked, setUnlocked] = useState(false);
    const [approved, setApproved] = useState(false);

    const handleClick = (event) => {
        if (!unlocked) return;
        event.preventDefault();
        dispatch(updateApprovedCourses({code: details[1], credits: details[2]}));
        setApproved(!approved);
    }

    const checkUnlocked = (approvedCourses, preRequisites) => preRequisites.every(v => approvedCourses.includes(v));

    useEffect(() => {
        if (checkUnlocked(ApprovedCourses, details[4])) {
            setUnlocked(true);
        }
        else setUnlocked(false);
    }, [ApprovedCourses]);

    return (
        <div onClick={handleClick} className={`w-full h-28 flex flex-col justify-around text-sm text-center gap-0.5 px-1 opacity-80 ${unlocked ? 'hover:cursor-pointer brightness-100' : 'hover:cursor-default brightness-50' }  ${details[3] === 'PC' && !approved ? `bg-PC` : null} ${details[3] === 'ElecEsp' && !approved ? `bg-ElecEsp` : null} ${details[3] === 'Esp' && !approved ? `bg-Esp` : null} ${details[3] === 'ElecLic' && !approved ? `bg-ElecLic` : null} ${details[3] === 'Lic' && !approved ? `bg-Lic` : null} ${details[3] === 'FG' && !approved ? `bg-FG` : null} ${details[3] === 'IN' && !approved ? `bg-IN` : null} ${details[3] === 'TI' && !approved ? `bg-TI` : null} ${details[3] === 'PF' && !approved ? `bg-PF` : null} ${approved ? `bg-AP` : null} `} >
            <div>{details[1]}</div>
            <div className={'line-clamp-2'}>{details[0]}</div>
            <div>{details[2]} creditos</div>
        </div>
    );
}