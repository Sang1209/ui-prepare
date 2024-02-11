import React, {Fragment} from 'react';
import Header from "@/components/layouts/main/Header";
import Footer from "@/components/layouts/main/Footer";

function MainLayout({children}: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </Fragment>
  );
}

export default MainLayout;