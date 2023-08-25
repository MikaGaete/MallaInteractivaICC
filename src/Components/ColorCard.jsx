// eslint-disable-next-line react/prop-types
export const ColorCard = ({type, full}) => {
    return (
        <div key={type} className={'w-full flex gap-2 justify-center items-center'}>
            <div className={'w-[25%] flex justify-end'}>
                <div className={`w-8 h-8 bg-${type}`}></div>
            </div>
            <p className={'w-[75%] text-start px-2'}>{full}</p>
        </div>
    )
}