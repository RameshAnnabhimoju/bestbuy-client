import React from "react";
import { CFormSelect } from "@coreui/react";
function MobileListingComponent({ vars }) {
  const [items, setItems] = vars;
  function changeHandler(e) {
    const { name, value } = e.target;
    setItems({ ...items, [name]: value });
  }
  return (
    <>
      <CFormSelect name="brand" value={items.brand} onChange={changeHandler}>
        <option>Brand</option>
        <option value="Samsung">Samsung</option>
        <option value="Mi">Mi</option>
        <option value="Motorola">Motorola</option>
        <option value="POCO">POCO</option>
        <option value="Pixel">Pixel</option>
        <option value="OnePlus">OnePlus</option>
      </CFormSelect>
      <br />
      <CFormSelect name="ram" value={items.ram} onChange={changeHandler}>
        <option>RAM</option>
        <option value="4GB">4GB</option>
        <option value="6GB">6GB</option>
        <option value="8GB">8GB</option>
        <option value="16GB">16GB</option>
      </CFormSelect>
      <br />
      <CFormSelect
        name="storage"
        value={items.storage}
        onChange={changeHandler}
      >
        <option>Storage</option>
        <option value="16GB">16GB</option>
        <option value="32GB">32GB</option>
        <option value="64GB">64GB</option>
        <option value="128GB">128GB</option>
      </CFormSelect>
      <br />
      <CFormSelect
        name="battery"
        value={items.battery}
        onChange={changeHandler}
      >
        <option>Battery</option>
        <option value="upto 3500mAH">upto 3500mAH</option>
        <option value="3501 mAH - 4000mAH">3501 mAH - 4000mAH</option>
        <option value="4001 mAH - 5000mAH">4001 mAH - 5000mAH</option>
        <option value="5001 mAH - 6000mAH">5001 mAH - 6000mAH</option>
      </CFormSelect>
      <br />
      <CFormSelect name="camera" value={items.camera} onChange={changeHandler}>
        <option>Camera</option>
        <option value="8MP">8MP</option>
        <option value="12MP">12MP</option>
        <option value="16MP">16MP</option>
        <option value="32MP">32MP</option>
        <option value="48MP">48MP</option>
        <option value="64MP">64MP</option>
      </CFormSelect>
      <br />
      <CFormSelect
        name="chipset"
        value={items.chipset}
        onChange={changeHandler}
      >
        <option>Chipset</option>
        <option value="Qualcomm Snapdragon">Qualcomm Snapdragon</option>
        <option value="MediaTek">MediaTek</option>
        <option value="Samsung Exynos">Samsung Exynos</option>
      </CFormSelect>
      <br />
      <CFormSelect
        name="network"
        value={items.network}
        onChange={changeHandler}
      >
        <option>Network connectivity</option>
        <option value="4G">4G</option>
        <option value="5G">5G</option>
      </CFormSelect>
    </>
  );
}

export default MobileListingComponent;
