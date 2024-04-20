import { useState, useEffect } from "react"
import { footerDesktopView, footerMobileView } from "../constants/nav"

const FooterMobile = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth)
        }

        handleResize();
        window.addEventListener('resize', handleResize);
    }, [])
    
    return (
        <>
            {windowWidth > 800 && footerDesktopView}
            {windowWidth <= 800 && footerMobileView}
        </>
    )
}

export default FooterMobile