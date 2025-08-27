import { userActions } from "@entities/User/model/slice/userSlice";
import { getRouteLogin } from "@shared/const/routes";
import { useAppDispatch } from "@shared/lib";
import { useLogOutUser } from "@features/Authentication/api/authenticationApi";
import { isFetchError } from "@shared/lib/typeGuards";
import { Button } from "antd";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const [logOutError, setLogOutError] = useState<string>("");
  const [LogOutUser, { isLoading }] = useLogOutUser();
  const navigate = useNavigate();

  const logOut = useCallback(async () => {
    const result = await LogOutUser();
    if (isFetchError(result)) {
      setLogOutError(result.error.data?.message ?? "Server error");
      throw new Error(logOutError);
    }
    if ("data" in result && result.data) {
      dispatch(userActions.logOutUser());
      navigate(getRouteLogin());
    }
  }, []);
  return (
    <div>
      MainPage
      <Button type='primary' onClick={logOut} children={"Logout"} loading={isLoading} />
    </div>
  );
};

export default MainPage;
