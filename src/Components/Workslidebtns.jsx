"use client"
import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi";
export default function Workslidebtns ({containerStyles, btnstyles, iconsStyles}) {
    const swiper = useSwiper();

    return <div className={containerStyles}>
        <button className={btnstyles} onClick={()=> swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles}/>
        </button>
        <button className={btnstyles} onClick={()=> swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles}/>
        </button>
    </div>

}