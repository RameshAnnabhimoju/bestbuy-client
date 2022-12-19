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
function WatchFilters() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item);
  const watchFiltersInitialValues = {
    type: [],
  };
  const [watchFiltervalues, setWatchFilterValues] = useState(
    watchFiltersInitialValues
  );
  function changeHandler(e) {
    const { name, title, checked } = e.target;
    if (checked) {
      setWatchFilterValues({
        ...watchFiltervalues,
        [name]: [...watchFiltervalues[name], title],
      });
    } else {
      setWatchFilterValues({
        ...watchFiltervalues,
        [name]: watchFiltervalues[name].filter((data) => data !== title),
      });
    }
  }
  // useEffect(() => {
  //   const query = new URLSearchParams({
  //     ...items.filters,
  //     ...watchFiltervalues,
  //   }).toString();
  //   dispatch(fetchItemsByfilter(query));
  // }, [watchFiltervalues]);
  return (
    <CForm>
      <CAccordion alwaysOpen>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Types</CAccordionHeader>

          <CAccordionBody className="filter-items">
            <CFormCheck label="Smart Watch" />
            <CFormCheck label="Fitness Band" />
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </CForm>
  );
}

export default WatchFilters;
