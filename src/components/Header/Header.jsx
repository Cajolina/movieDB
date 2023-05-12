import NavLinks from "./NavLinks";
import MyMovies from "./MyMovies";

const Header = () => {
  return (
    <div className="headerContent">
      <h1>Header</h1>
      <div className="rightContent">
        <NavLinks />
        <MyMovies />
      </div>
    </div>
  );
};

export default Header;
