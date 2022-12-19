import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItemsByfilter } from "../../../api/itemSlice";
import {
  CForm,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
  CFormCheck,
} from "@coreui/react";
function MobileFilters() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item);
  const mobileFiltersInitialValues = {
    brand: [],
    ram: [],
    storage: [],
    battery: [],
    camera: [],
    chipset: [],
    network: [],
  };
  const [mobileFiltervalues, setMobileFilterValues] = useState(
    mobileFiltersInitialValues
  );
  function changeHandler(e) {
    const { name, title, checked } = e.target;
    if (checked) {
      setMobileFilterValues({
        ...mobileFiltervalues,
        [name]: [...mobileFiltervalues[name], title],
      });
    } else {
      setMobileFilterValues({
        ...mobileFiltervalues,
        [name]: mobileFiltervalues[name].filter((data) => data !== title),
      });
    }
  }

  // useEffect(() => {
  //   const query = new URLSearchParams({
  //     ...items.filters,
  //     ...mobileFiltervalues,
  //   }).toString();
  //   dispatch(fetchItemsByfilter(query));
  // }, [mobileFiltervalues]);

  return (
    <CForm>
      <CAccordion alwaysOpen>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Brands</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormCheck
              label="Samsung"
              name="brand"
              title="Samsung"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Mi"
              name="brand"
              title="Mi"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Motorola"
              name="brand"
              title="Motorola"
              onChange={changeHandler}
            />
            <CFormCheck
              label="POCO"
              name="brand"
              title="POCO"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Pixel"
              name="brand"
              title="Pixel"
              onChange={changeHandler}
            />
            <CFormCheck
              label="OnePlus"
              name="brand"
              title="OnePlus"
              onChange={changeHandler}
            />
          </CAccordionBody>
        </CAccordionItem>

        <CAccordionItem itemKey={2}>
          <CAccordionHeader>RAM</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormCheck
              label="4GB"
              name="ram"
              title="4GB"
              onChange={changeHandler}
            />
            <CFormCheck
              label="6GB"
              name="ram"
              title="6GB"
              onChange={changeHandler}
            />
            <CFormCheck
              label="8GB"
              name="ram"
              title="8GB"
              onChange={changeHandler}
            />
            <CFormCheck
              label="16GB"
              name="ram"
              title="16GB"
              onChange={changeHandler}
            />
          </CAccordionBody>
        </CAccordionItem>

        <CAccordionItem itemKey={3}>
          <CAccordionHeader>Storage</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormCheck
              label="16GB"
              name="storage"
              title="16GB"
              onChange={changeHandler}
            />
            <CFormCheck
              label="32GB"
              name="storage"
              title="32GB"
              onChange={changeHandler}
            />
            <CFormCheck
              label="64GB"
              name="storage"
              title="64GB"
              onChange={changeHandler}
            />
            <CFormCheck
              label="128GB"
              name="storage"
              title="128GB"
              onChange={changeHandler}
            />
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={4}>
          <CAccordionHeader>Battery</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormCheck
              label="upto 3500mAH"
              name="battery"
              title="upto 3500mAH"
              onChange={changeHandler}
            />
            <CFormCheck
              label="3501 mAH - 4000mAH"
              name="battery"
              title="3501 mAH - 4000mAH"
              onChange={changeHandler}
            />
            <CFormCheck
              label="4001 mAH - 5000mAH"
              name="battery"
              title="4001 mAH - 5000mAH"
              onChange={changeHandler}
            />
            <CFormCheck
              label="5001 mAH - 6000mAH"
              name="battery"
              title="5001 mAH - 6000mAH"
              onChange={changeHandler}
            />
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={5}>
          <CAccordionHeader>Camera</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormCheck
              label="8MP"
              name="camera"
              title="8MP"
              onChange={changeHandler}
            />
            <CFormCheck
              label="12MP"
              name="camera"
              title="12MP"
              onChange={changeHandler}
            />
            <CFormCheck
              label="16MP"
              name="camera"
              title="16MP"
              onChange={changeHandler}
            />
            <CFormCheck
              label="32MP"
              name="camera"
              title="32MP"
              onChange={changeHandler}
            />
            <CFormCheck
              label="48MP"
              name="camera"
              title="48MP"
              onChange={changeHandler}
            />
            <CFormCheck
              label="64MP"
              name="camera"
              title="64MP"
              onChange={changeHandler}
            />
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={6}>
          <CAccordionHeader>Chipset</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormCheck
              label="Qualcomm Snapdragon"
              name="chipset"
              title="Qualcomm Snapdragon"
              onChange={changeHandler}
            />
            <CFormCheck
              label="MediaTek"
              name="chipset"
              title="MediaTek"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Samsung Exynos"
              name="chipset"
              title="Samsung Exynos"
              onChange={changeHandler}
            />
          </CAccordionBody>
        </CAccordionItem>

        <CAccordionItem itemKey={7}>
          <CAccordionHeader>Network connectivity</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormCheck
              label="4G"
              name="network"
              title="4G"
              onChange={changeHandler}
            />
            <CFormCheck
              label="5G"
              name="network"
              title="5G"
              onChange={changeHandler}
            />
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </CForm>
  );
}

export default MobileFilters;
