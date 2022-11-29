const Popup = ({children}) => {
    return (
    <div className='absolute h-screen w-full bg-gray-900/75'>
        <div className='flex h-full items-center'>
            <div className='bg-gray-700 w-full h-[150px]'>
                <div className='w-[330px] mx-auto'>{children}</div>
            </div>
        </div>
    </div>
    )
}

export default Popup