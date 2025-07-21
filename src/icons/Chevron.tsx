import * as React from "react"

const ChevronIcon = ({ w, className }: { w?: number, className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className={className}
        width={w ? w : '10'}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m9 6 6 6-6 6"
        />
    </svg>
)
export default ChevronIcon
