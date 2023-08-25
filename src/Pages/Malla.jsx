import {FirstTimeSetUp} from "../Components/FirstTimeSetUp.jsx";
import {useSelector} from "react-redux";
import {CourseCard} from "../Components/CourseCard.jsx";
import colorData from '../Data/colorData.json';
import {ColorCard} from "../Components/ColorCard.jsx";

export const Malla = () => {
    FirstTimeSetUp();
    const {CommonPlan, Degree, Specialty, ApprovedCredits} = useSelector(state => state.data);
    const types = Object.keys(colorData);

    return (
        <div className={'w-full min-h-full'}>
            <div className={'flex flex-col items-center m-8 gap-8'}>
                <h1 className={'text-center text-3xl'}>Malla Ingeniería Civil en Computación</h1>
                <div className={'flex gap-6 w-full'}>
                    <div className={'w-[36%] min-w-[600px]'}>
                        <h2 className={'text-center bg-[#BAD7F2] py-3 mb-4'}>Plan Común</h2>
                        <div className={'grid grid-cols-4 gap-1'}>
                            {CommonPlan.map((semester, index) => {
                                const idx = index + 1;
                                return (
                                    <div key={index}>
                                        <h3 className={'text-center'}>{idx}</h3>
                                        <div className={'flex flex-col gap-1'}>
                                            {semester.map((course, index) => <CourseCard key={idx+"|"+index} details={course} />)}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={'w-[36%] min-w-[600px]'}>
                        <h2 className={'text-center bg-[#BAD7F2] py-3 mb-4'}>Licenciatura</h2>
                        <div className={'grid grid-cols-4 gap-1'}>
                            {Degree.map((semester, index) => {
                                const idx = index + CommonPlan.length + 1;
                                return (
                                    <div key={index}>
                                        <h3 className={'text-center'}>{idx}</h3>
                                        <div className={'flex flex-col gap-1'}>
                                            {semester.map((course, index) => <CourseCard key={idx+"|"+index} details={course} />)}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={'w-[28%]  min-w-[466px]'}>
                        <h2 className={'text-center bg-[#BAD7F2] py-3 mb-4'}>Especialidad</h2>
                        <div className={'grid grid-cols-3 gap-1'}>
                            {Specialty.map((semester, index) => {
                                const idx = index + CommonPlan.length + Degree.length + 1;
                                return (
                                    <div key={index}>
                                        <h3 className={'text-center'}>{idx}</h3>
                                        <div className={'flex flex-col gap-1'}>
                                            {semester.map((course, index) => <CourseCard key={idx+"|"+index} details={course} />)}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col items-center w-full gap-4'}>
                    <p className={'text-xl'}>Creditos aprobados: {ApprovedCredits}</p>
                    <div className={'grid grid-cols-5 w-[90%] gap-4 justify-items-center'}>
                        {types.map((type) => <ColorCard key={type} type={type} {...colorData[type]}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}