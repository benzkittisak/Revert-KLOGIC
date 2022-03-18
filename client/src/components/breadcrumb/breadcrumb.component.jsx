import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const BreadcrumbSection = ({ path }) => {
  const pathname = path.split("/").map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  });

  const isActive = pathname[pathname.length -1];

  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">หน้าแรก</Breadcrumb.Item>
      {pathname.map((link, index) =>
        link ? (
          <Breadcrumb.Item key={index} active={isActive === link} href={process.env.PUBLIC_URL + { link }}>
            {link}{" "}
          </Breadcrumb.Item>
        ) : null
      )}
    </Breadcrumb>
  );
};

export default BreadcrumbSection;
