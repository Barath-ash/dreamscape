export default function SideNavbar(){
    return(
        <>
        <div className="bg-gray-200 p-4">
            <p className="text-right cursor-pointer" onClick={() => alert('Close sidebar!')}>
                <i className="fa-solid fa-xmark"></i>
            </p>
            <div className="mt-4">
                {links.map(link => (
                    <p key={link}>
                        <a href="#" className="block hover:underline">{link}</a>
                    </p>
                ))}
            </div>
        </div>

        </>
    )
}