import * as React from "react"

const FacebookIcon = ({ size, className }: { size: number, className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-5 0 20 20"
        width={size}
        className={className}>
        <title>{"facebook [#176]"}</title>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6.821 20v-9h2.733L10 7H6.821V5.052C6.821 4.022 6.848 3 8.287 3h1.458V.14c0-.043-1.253-.14-2.52-.14C4.58 0 2.924 1.657 2.924 4.7V7H0v4h2.923v9h3.898Z"
        />
    </svg>
)
export default FacebookIcon
