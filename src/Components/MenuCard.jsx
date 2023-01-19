const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;

          return (
            <>
              <div className="card-container subtle" key={id}>
                <div className="card subtle ">
                  <div className="card-body subtle">
                    <span className="card-number card-circle subtle">{id}</span>

                    <span className="card-author subtle"> {category}</span>

                    <h2 className="card-title subtle"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>

                    {/* <div className="card-read"></div> */}
                  </div>
                  <img src={image} alt="images" className="card-media subtle" />

                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
