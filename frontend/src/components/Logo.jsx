const Logo = ({ size = "h-20 w-20" }) => {
  return (
    <div className="relative flex items-center">
      <img
        src="/Gympic1.png"
        alt="MUGymCenter Logo"
        className={`${size} object-contain`}
      />
    </div>
  )
}

export default Logo
