const Stashfaces = () => {
  const Faces = [
    {
      id: 1,
      face: "rolake",
    },
    {
      id: 2,
      face: "temi",
    },
    {
      id: 3,
      face: "jeyy",
    },
    {
      id: 4,
      face: "biola",
    },
    {
      id: 5,
      face: "tomi",
    },
    {
      id: 6,
      face: "ope",
    },
    {
      id: 7,
      face: "tayoBlings",
    },
    {
      id: 8,
      face: "roselyn",
    },
    {
      id: 9,
      face: "chinyere",
    },
    {
      id: 10,
      face: "ope",
    },
    {
      id: 11,
      face: "anne",
    },
    {
      id: 12,
      face: "pearl",
    },
    {
      id: 13,
      face: "oyin",
    },
    {
      id: 14,
      face: "tola",
    },
    {
      id: 15,
      face: "akin",
    },
    {
      id: 16,
      face: "fisayo",
    },
    {
      id: 17,
      face: "shaq",
    },
    {
      id: 18,
      face: "remiO",
    },
    {
      id: 19,
      face: "jemima",
    },
    {
      id: 20,
      face: "naomi",
    },
  ];
  return (
    <div className="stash-faces">
      <div className="to-left animation">
        {Faces.filter((face) => face.id < 11).map((item) => {
          return (
            <div className="persona" key={item.id}>
              <div className="image">
                <div className="bg"></div>
                <img
                  src={`assets/stash/stash-faces/face-${item?.id}.jpg`}
                  alt=""
                />
              </div>
              <span>@{item?.face}</span>
            </div>
          );
        })}
        {Faces.filter((face) => face.id < 11).map((item) => {
          return (
            <div className="persona" key={item.id}>
              <div className="image">
                <div className="bg"></div>
                <img
                  src={`assets/stash/stash-faces/face-${item?.id}.jpg`}
                  alt=""
                />
              </div>
              <span>@{item?.face}</span>
            </div>
          );
        })}
      </div>
      <div className="to-right animation">
        {Faces.filter((face) => face.id >= 11).map((item) => {
          return (
            <div className="persona" key={item.id}>
              <div className="image">
                <div className="bg"></div>
                <img
                  src={`assets/stash/stash-faces/face-${item?.id}.jpg`}
                  alt=""
                />
              </div>
              <span>@{item?.face}</span>
            </div>
          );
        })}
        {Faces.filter((face) => face.id >= 11).map((item) => {
          return (
            <div className="persona" key={item.id}>
              <div className="image">
                <div className="bg"></div>
                <img
                  src={`assets/stash/stash-faces/face-${item?.id}.jpg`}
                  alt=""
                />
              </div>
              <span>@{item?.face}</span>
            </div>
          );
        })}
      </div>
      <div className="center">
        <h3>
          <span>Don't be the</span> weird @user19562230
        </h3>
        <p>
          No need to remember long numbers. Claim your username now and make
          instant transactions from your Stash on the go.
        </p>
      </div>
    </div>
  );
};

export default Stashfaces;
