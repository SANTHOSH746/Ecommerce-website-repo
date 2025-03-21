import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const userEmail = useSelector((state) => state.user.email); // Get email from Redux

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">
          MyShop
        </Link>
        <div className="space-x-4">
          <Link to="/products" className="hover:underline">
            Products
          </Link>
          <Link to="/my-orders" className="hover:underline">
            My Orders
          </Link>
          {userEmail && (
            <span className="text-sm text-gray-200">Welcome, {userEmail}</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
