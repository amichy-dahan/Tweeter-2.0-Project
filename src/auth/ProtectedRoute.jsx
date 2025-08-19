import { Navigate } from "react-router";


function ProtectedRoute({ children ,name}) {
 
  console.log(name)
  if (name === "null") return <Navigate to="/" replace />;

  return <>{children}</>;
}

export default ProtectedRoute;