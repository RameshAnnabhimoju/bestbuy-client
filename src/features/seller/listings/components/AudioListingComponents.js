import React from "react";
import { CFormSelect } from "@coreui/react";

function AudioListingComponents({ vars }) {
  const [items, setItems] = vars;
  function changeHandler(e) {
    const { name, value } = e.target;
    console.log(items);
    setItems({ ...items, [name]: value });
  }
  return (
    <>
      <CFormSelect name="brand" value={items.brand} onChange={changeHandler}>
        <option>Brand</option>
        <option value="Mi">Mi</option>
        <option value="Boat">Boat</option>
        <option value="OnePlus">OnePlus</option>
        <option value="JBL">JBL</option>
        <option value="Sony">Sony</option>
        <option value="Samsung">Samsung</option>
      </CFormSelect>
      <br />
      <CFormSelect name="type" value={items.type} onChange={changeHandler}>
        <option>Type</option>
        <option value="Wired Earphones">Wired Earphones</option>
        <option value="Wired Headset">Wired Headset</option>
        <option value="Wireless Earphones">Wireless Earphones</option>
        <option value="Wireless Headset">Wireless Headset</option>
        <option value="Wireless Neckbands">Wireless Headset</option>
        <option value="Wireless Earbuds">Wireless Headset</option>
        <option value="Wireless Speakers">Wireless Headset</option>
      </CFormSelect>
    </>
  );
}

export default AudioListingComponents;
