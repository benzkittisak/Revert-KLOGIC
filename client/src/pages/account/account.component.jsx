import React from "react";
import { useLocation } from "react-router-dom";

import MasterLayout from "../../layouts/layout.master";

import BreadcrumbSection from "../../components/breadcrumb/breadcrumb.component";


const AccountPage = () => {

    const location = useLocation().pathname;

  return (
    <>
      <MasterLayout>
        <BreadcrumbSection path={location}/>
      </MasterLayout>
    </>
  );
};
export default AccountPage;
