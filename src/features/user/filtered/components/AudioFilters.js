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
function AudioFilters() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item);
  const audioFiltersInitialValues = {
    brand: [],
    type: [],
  };
  const [audioFiltersValues, setAudioFiltersValues] = useState();
  function changeHandler(e) {
    const { name, title, checked } = e.target;
    if (checked) {
      setAudioFiltersValues({
        ...audioFiltersValues,
        [name]: [...audioFiltersValues[name], title],
      });
    } else {
      setAudioFiltersValues({
        ...audioFiltersValues,
        [name]: audioFiltersValues[name].filter((data) => data !== title),
      });
    }
  }
  // useEffect(() => {
  //   const query = new URLSearchParams({
  //     ...items.filters,
  //     ...audioFiltersValues,
  //   }).toString();
  //   dispatch(fetchItemsByfilter(query));
  // }, [audioFiltersValues]);
  return (
    <CForm>
      <CAccordion alwaysOpen>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Brands</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormCheck
              label="Mi"
              title="Mi"
              name="brands"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Boat"
              title="Boat"
              name="brand"
              onChange={changeHandler}
            />
            <CFormCheck
              label="OnePlus"
              title="OnePlus"
              name="brand"
              onChange={changeHandler}
            />
            <CFormCheck
              label="JBL"
              title="JBL"
              name="brand"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Sony"
              title="Sony"
              name="brand"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Samsung"
              title="Samsung"
              name="brand"
              onChange={changeHandler}
            />
          </CAccordionBody>
        </CAccordionItem>

        <CAccordionItem itemKey={2}>
          <CAccordionHeader>Type</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormCheck
              label="Wired Earphones"
              title="Wired Earphones"
              name="type"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Wired Headset"
              title="Wired Headset"
              name="type"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Wireless Earphones"
              title="Wireless Earphones"
              name="type"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Wireless Headset"
              title="Wireless Headset"
              name="type"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Wireless Neckbands"
              title="Wireless Neckbands"
              name="type"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Wireless Earbuds"
              title="Wireless Earbuds"
              name="type"
              onChange={changeHandler}
            />
            <CFormCheck
              label="Wireless Speakers"
              title="Wireless Speakers"
              name="type"
              onChange={changeHandler}
            />
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </CForm>
  );
}

export default AudioFilters;
