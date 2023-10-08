import {useNavigate} from "react-router-dom";
import {Button} from "@nextui-org/react";

export const CareerSelection = () => {
    const navigate = useNavigate();

    return (
        <div className={'w-full h-screen flex flex-col justify-center items-center gap-8'}>
            <h1 className={'text-center text-3xl font-semibold'}>Seleccione la carrera que desea revisar</h1>
            <div className={'flex justify-center items-center gap-16 content-center'}>
                <Button className={'w-64'} color={'danger'} size={'lg'} onPress={() => navigate('-ICC')}>
                    Ingeniería Civil en Computación
                </Button>
                <Button className={'w-64 text-[#ffffff]'} color={'success'} size={'lg'} onPress={() => navigate('-ICQ')}>
                    Ingeniería Civil Química
                </Button>
            </div>
        </div>
    )
}