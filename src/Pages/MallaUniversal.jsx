import {FirstTimeSetUp} from "../Components/FirstTimeSetUp.jsx";
import {useSelector} from "react-redux";
import {CourseCard} from "../Components/CourseCard.jsx";
import {ColorCard} from "../Components/ColorCard.jsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

export const MallaUniversal = () => {
    const {specialty} = useParams();

    FirstTimeSetUp(specialty);
    const {CommonPlan, Degree, Specialty, ApprovedCredits, Colors, Titles} = useSelector(state => state.data);
    const types = Object.keys(Colors[specialty]);

    return (
        <div className={'w-full min-h-full'}>
            <div className={'flex flex-col items-center m-4 md:m-8 gap-8'}>
                <h1 className={'text-center text-3xl font-semibold'}>Malla {Titles[specialty]}</h1>
                <div className={'flex gap-6 w-full overflow-x-auto py-4'}>
                    <div className={'min-w-[651px]'}>
                        <h2 className={'text-center bg-[#BAD7F2] py-3 mb-4 font-bold text-lg'}>Plan Común</h2>
                        <div className={'grid grid-cols-4 gap-1'}>
                            {CommonPlan.map((semester, index) => {
                                const idx = index + 1;
                                return (
                                    <div key={index}>
                                        <h3 className={'text-center text-lg font-semibold mb-2'}>{idx}</h3>
                                        <div className={'flex flex-col gap-1'}>
                                            {semester.map((course, index) => <CourseCard specialty={specialty} key={idx+"|"+index} details={course} />)}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={'min-w-[651px]'}>
                        <h2 className={'text-center bg-[#BAD7F2] py-3 mb-4 font-bold text-lg'}>Licenciatura</h2>
                        <div className={'grid grid-cols-4 gap-1'}>
                            {Degree.map((semester, index) => {
                                const idx = index + CommonPlan.length + 1;
                                return (
                                    <div key={index}>
                                        <h3 className={'text-center text-lg font-semibold mb-2'}>{idx}</h3>
                                        <div className={'flex flex-col gap-1'}>
                                            {semester.map((course, index) => <CourseCard specialty={specialty} key={idx+"|"+index} details={course} />)}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={'min-w-[488px]'}>
                        <h2 className={'text-center bg-[#BAD7F2] py-3 mb-4 font-bold text-lg'}>Especialidad</h2>
                        <div className={'grid grid-cols-3 gap-1'}>
                            {Specialty.map((semester, index) => {
                                const idx = index + CommonPlan.length + Degree.length + 1;
                                return (
                                    <div key={index}>
                                        <h3 className={'text-center text-lg font-semibold mb-2'}>{idx}</h3>
                                        <div className={'flex flex-col gap-1'}>
                                            {semester.map((course, index) => <CourseCard specialty={specialty} key={idx+"|"+index} details={course} />)}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col items-center w-full gap-8 font-semibold'}>
                    <p className={'text-xl lg:text-2xl'}>Creditos aprobados: {ApprovedCredits[specialty]}</p>
                    <div className={'w-full grid grid-cols-2 md:grid-cols-5 gap-2 justify-items-center'}>
                        {types.map((type) => <ColorCard key={type} type={type} specialty={specialty} {...Colors[specialty][type]}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}