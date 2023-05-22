import { useLocation, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const UserDetailPage = () => {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    console.log(searchParams.get("name"));
  };

  return <p>User</p>;
};

export default UserDetailPage;
