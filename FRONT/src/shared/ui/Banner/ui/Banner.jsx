import "./parallax-banner.css";

const Banner = ({ height = 300, children, className = "" }) => {
  return (
    <div
      className={`parallax-banner bg-beigeCustom ${className}`}
      style={{
        height: `${height}px`,
      }}
    >
      <div className="parallax-content">{children}</div>
    </div>
  );
};

export default Banner;
