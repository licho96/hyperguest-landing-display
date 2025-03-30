const Logo = () => {
  return (
    <svg
      width="140"
      height="32"
      viewBox="0 0 140 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-emerald-500"
    >
      <path
        d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z"
        fill="currentColor"
      />
      <text
        x="40"
        y="24"
        className="text-2xl font-bold"
        fill="currentColor"
        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
      >
        HyperGuest
      </text>
    </svg>
  )
}

export default Logo 