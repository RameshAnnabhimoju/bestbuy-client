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
function TabletFilters() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item);
  const tabletFiltersInitialValues = {
    brands: [],
    ram: [],
    storage: [],
    battery: [],
    network: [],
  };
  const [tabletFilterValues, setTabletFilterValues] = useState(
    tabletFiltersInitialValues
  );
  function changeHandler(e) {
    const { name, title, checked } = e.target;
    if (checked) {
      setTabletFilterValues({
        ...tabletFilterValues,
        [name]: [...tabletFilterValues[name], title],
      });
    } else {
      setTabletFilterValues({
        ...tabletFilterValues,
        [name]: tabletFilterValues[name].filter((data) => data !== title),
      });
    }
  }
  // useEffect(() => {
  //   const query = new URLSearchParams({
  //     ...items.filters,
  //     ...tabletFilterValues,
  //   }).toString();
  //   dispatch(fetchItemsByfilter(query));
  // }, [tabletFilterValues]);
  return (
    <CForm>
      <CAccordion alwaysOpen>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Brands</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormCheck
              label="Samsung"
              title="Samsung"
              name="brand"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Mi"
              title="Mi"
              name="brand"
              onChange={changeHandler}
            />
            <CFormCheck label="Motorola" />
          </CAccordionBody>
        </CAccordionItem>

        <CAccordionItem itemKey={2}>
          <CAccordionHeader>RAM</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormCheck
              label="2GB"
              title="2GB"
              name="ram"
              onChange={changeHandler}
            />
            <CFormCheck
              label="3GB"
              title="3GB"
              name="ram"
              onChange={changeHandler}
            />
            <CFormCheck
              label="4GB"
              title="4GB"
              name="ram"
              onChange={changeHandler}
            />
            <CFormCheck
              label="8GB"
              title="8GB"
              name="ram"
              onChange={changeHandler}
            />
          </CAccordionBody>
        </CAccordionItem>

        <CAccordionItem itemKey={3}>
          <CAccordionHeader>Storage</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormCheck
              label="4GB"
              title="4GB"
              name="storage"
              onChange={changeHandler}
            />
            <CFormCheck
              label="6GB"
              title="6GB"
              name="storage"
              onChange={changeHandler}
            />
            <CFormCheck
              label="8GB"
              title="8GB"
              name="storage"
              onChange={changeHandler}
            />
            <CFormCheck
              label="16GB"
              title="16GB"
              name="storage"
              onChange={changeHandler}
            />
            <CFormCheck
              label="32GB"
              title="32GB"
              name="storage"
              onChange={changeHandler}
            />
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={4}>
          <CAccordionHeader>Battery</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormCheck
              label="upto 4000mAH"
              title="upto 4000mAH"
              name="battery"
              onChange={changeHandler}
            />
            <CFormCheck
              label="4001 mAH - 5000mAH"
              title="4001 mAH - 5000mAH"
              name="battery"
              onChange={changeHandler}
            />
            <CFormCheck
              label="5001 mAH - 6000mAH"
              title="5001 mAH - 6000mAH"
              name="battery"
              onChange={changeHandler}
            />
            <CFormCheck
              label="6001 mAH - 7000mAH"
              title="6001 mAH - 7000mAH"
              name="battery"
              onChange={changeHandler}
            />
            <CFormCheck
              label="7001 mAH - 8000mAH"
              title="7001 mAH - 8000mAH"
              name="battery"
              onChange={changeHandler}
            />
          </CAccordionBody>
        </CAccordionItem>

        <CAccordionItem itemKey={5}>
          <CAccordionHeader>Network connectivity</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormCheck
              label="Wifi only"
              title="Wifi only"
              name="network"
              onChange={changeHandler}
            />
            <CFormCheck
              label="4G"
              title="4G"
              name="network"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Wifi+4G"
              title="Wifi+4G"
              name="network"
              onChange={changeHandler}
            />
            <CFormCheck
              label="5G"
              title="5G"
              name="network"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Wifi+5G"
              title="Wifi+5G"
              name="network"
              onChange={changeHandler}
            />
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </CForm>
  );
}

export default TabletFilters;
