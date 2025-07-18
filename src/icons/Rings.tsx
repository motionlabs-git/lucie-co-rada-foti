import * as React from "react"


interface Props {
    className?: string
    width?: number
    height?: number
    id?: string
}

const RingsIcon = ({ className, width, height }: Props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width={width} height={height} className={className}>

        <style>{".s0{fill:#ffdb2d}.s1{fill:#ffae33}"}</style>
        <g id="SVGRepo_iconCarrier">
            <path
                d="M225.2 0C101 0 0 101 0 225.2c0 124.3 101 225.3 225.2 225.3 124.3 0 225.3-101 225.3-225.3C450.5 101 349.5 0 225.2 0zm0 375.4c-82.8 0-150.1-67.3-150.1-150.2 0-82.8 67.3-150.1 150.1-150.1 82.9 0 150.2 67.3 150.2 150.1 0 82.9-67.3 150.2-150.2 150.2z"
                className="ring-1 s0 translate-x-28 translate-y-28"
            />
            <path
                d="M225.2 0v75.1c82.9 0 150.2 67.3 150.2 150.1 0 82.9-67.3 150.2-150.2 150.2v75.1c124.3 0 225.3-101 225.3-225.3C450.5 101 349.5 0 225.2 0z"
                className="ring-1 s1 translate-x-28 translate-y-28"
            />
            <path
                d="M574.5 349C450.2 349 349 450.2 349 574.5S450.2 800 574.5 800 800 698.8 800 574.5 698.8 349 574.5 349zm0 375.8c-82.9 0-150.3-67.4-150.3-150.3s67.4-150.3 150.3-150.3 150.3 67.4 150.3 150.3-67.4 150.3-150.3 150.3z"
                style={{
                    fill: "#ffe981",
                }}
                className="ring-2 -translate-x-28 -translate-y-28"
            />
            <path
                d="M358.6 294.3c-25.1 48.2-75.4 81.1-133.4 81.1-33.7 0-64.9-11.2-90.1-30.1v86.4c27.7 12.1 58.1 18.8 90.1 18.8 100.2 0 185.2-65.7 214.5-156.2h-81.1z"
                className="ring-1 s0 translate-x-28 translate-y-28"
            />
            <path
                d="M358.6 294.3c-25.1 48.2-75.4 81.1-133.4 81.1v75.1c100.2 0 185.2-65.7 214.5-156.2z"
                className="ring-1 s1 translate-x-28 translate-y-28"
            />
            <path
                d="M574.5 349v75.2c82.9 0 150.3 67.4 150.3 150.3s-67.4 150.3-150.3 150.3V800C698.8 800 800 698.8 800 574.5S698.8 349 574.5 349z"
                className="ring-2 s0 -translate-x-28 -translate-y-28"
            />
        </g>
    </svg>


)
export default RingsIcon
