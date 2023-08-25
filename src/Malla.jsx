import {FirstTimeSetUp} from "./FirstTimeSetUp.jsx";
import {useSelector} from "react-redux";
import {CourseCard} from "./CourseCard.jsx";

export const Malla = () => {
    FirstTimeSetUp();
    const {CommonPlan, Degree, Specialty} = useSelector(state => state.data);

    return (
        <div className={'w-full min-h-full'}>
            <div className={'flex flex-col items-center m-8 gap-8'}>
                <h1 className={'text-center text-3xl'}>Malla Ingeniería Civil en Computación</h1>
                <div className={'flex gap-6 w-full'}>
                    <div className={'w-[36%]'}>
                        <h2 className={'text-center bg-[#BAD7F2] py-3 mb-4'}>Plan Común</h2>
                        <div className={'grid grid-cols-4 gap-1'}>
                            {CommonPlan.map((semester, index) => {
                                return (
                                    <div key={index}>
                                        <h3 className={'text-center'}>{index + 1}</h3>
                                        <div className={'flex flex-col gap-1'}>
                                            {semester.map((course) => <CourseCard key={course[0]} details={course} />)}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={'w-[36%]'}>
                        <h2 className={'text-center bg-[#BAD7F2] py-3 mb-4'}>Licenciatura</h2>
                        <div className={'grid grid-cols-4 gap-1'}>
                            {Degree.map((semester, index) => {
                                return (
                                    <div key={index}>
                                        <h3 className={'text-center'}>{index + CommonPlan.length + 1}</h3>
                                        <div className={'flex flex-col gap-1'}>
                                            {semester.map((course) => <CourseCard key={course[0]} details={course} />)}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={'w-[28%]'}>
                        <h2 className={'text-center bg-[#BAD7F2] py-3 mb-4'}>Especialidad</h2>
                        <div className={'grid grid-cols-3 gap-1'}>
                            {Specialty.map((semester, index) => {
                                return (
                                    <div key={index}>
                                        <h3 className={'text-center'}>{index + CommonPlan.length + Degree.length + 1}</h3>
                                        <div className={'flex flex-col gap-1'}>
                                            {semester.map((course) => <CourseCard key={course[0]} details={course} />)}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}