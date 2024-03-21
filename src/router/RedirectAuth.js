import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Navigate, useLocation, useNavigate } from "react-router";
import ErrorFallBack from "../components/common/ui/Error/ErrorFallBack";
// import Loader from "../components/common/ui/Loader/Loader";
import { useAuthContext } from "../ContextAPI/AuthContextAPI";

const RedirectAuth = (props) => {
  // const { currUserData } = useAuthContext();
  const currUserData = true;

  const history = useNavigate();
  const location = useLocation();

  console.log(props.role);

  return (props.role === "private" && currUserData) ||
    (props.role === "withoutHeader" && currUserData) ||
    props.role === "public" ? (
    props.notLazy ? (
      <ErrorBoundary
        FallbackComponent={ErrorFallBack}
        onReset={() => history("/", { replace: true })}
      >
        {props.children}
      </ErrorBoundary>
    ) : (
      <Suspense fallback={""}>
        <ErrorBoundary
          FallbackComponent={ErrorFallBack}
          onReset={() => history("/", { replace: true })}
        >
          {props.children}
        </ErrorBoundary>
      </Suspense>
    )
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RedirectAuth;
