import { Outlet, Navigate } from "react-router-dom";
import { getAuth } from "./getAuth";

/* JWT 토큰을 확인해 접근권한을 주는 함수 */
export function PrivateRoutes2() {
  let auth = getAuth();
  return auth.access_token ? <Outlet /> : <Navigate to="/signin" />;
}
