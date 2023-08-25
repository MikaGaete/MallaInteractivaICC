// eslint-disable-next-line react/prop-types
export const CourseCard = ({details}) => {

    return (
        <div className={`w-full h-28 flex flex-col justify-around text-sm text-center gap-0.5 px-1 bg-opacity-70 ${details[3] === 'PC' ? `bg-PC` : null} ${details[3] === 'ElecEsp' ? `bg-ElecEsp` : null} ${details[3] === 'Esp' ? `bg-Esp` : null} ${details[3] === 'ElecLic' ? `bg-ElecLic` : null} ${details[3] === 'Lic' ? `bg-Lic` : null} ${details[3] === 'FI' ? `bg-FI` : null} ${details[3] === 'IN' ? `bg-IN` : null} ${details[3] === 'TI' ? `bg-TI` : null} ${details[3] === 'PF' ? `bg-PF` : null} `} >
            <div>{details[1]}</div>
            <div className={'line-clamp-2'}>{details[0]}</div>
            <div>{details[2]} creditos</div>
        </div>
    );
}