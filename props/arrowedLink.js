const ArrowedLink = ({ linktext, linkcolor }) => {
  return (
    <div className="arrowed-link" style={{ color: `${linkcolor}` }}>
      {linktext}
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
          svg-inline=""
          role="presentation"
          focusable="false"
          tabIndex="-1"
          fill={linkcolor}
        >
          <path d="M21.31 14.484L9.602 26.808a.627.627 0 01-.912-.009.71.71 0 01-.007-.96L19.93 14 8.683 2.16a.71.71 0 01.007-.96.627.627 0 01.912-.008L21.31 13.516a.71.71 0 010 .968z"></path>
        </svg>
      </span>
    </div>
  );
};

export default ArrowedLink;
