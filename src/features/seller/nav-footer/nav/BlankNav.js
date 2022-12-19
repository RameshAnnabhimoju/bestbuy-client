import { CNavbar, CContainer, CNavbarBrand } from "@coreui/react";
export default function BlankNav() {
  return (
    <>
      <CNavbar colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarBrand href="#">BESTBUY.COM</CNavbarBrand>
        </CContainer>
      </CNavbar>
    </>
  );
}
