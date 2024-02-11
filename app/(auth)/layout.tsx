import React, {Fragment} from 'react';
import AuthHeader from "@/components/layouts/auth/AuthHeader";
import AuthFooter from "@/components/layouts/auth/AuthFooter";

function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <Fragment>
      <AuthHeader/>
      {children}
      <AuthFooter/>
    </Fragment>
  );
}

export default AuthLayout;