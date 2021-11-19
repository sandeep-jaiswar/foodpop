import {lazy} from "react";

const LoginDrawer = lazy(() =>
  import("../../components/organisms/loginDrawer"),
);
const SearchLocationDrawer = lazy(() =>
  import("../../components/organisms/SearchLocationDrawer"),
);
const SignupDrawer = lazy(() =>
  import("../../components/organisms/SignupDrawer"),
);

const Components = {
  LoginDrawer: LoginDrawer,
  SearchLocationDrawer: SearchLocationDrawer,
  SignupDrawer: SignupDrawer,
};

export default Components;
