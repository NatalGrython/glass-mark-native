import { createAction } from "@reduxjs/toolkit";
import { Address } from "../../types/address";
import { UPDATE_ADDRESSES, DELETE_ADDRESSES } from "./constants";

export const updateAddressesAction = createAction<Address[]>(UPDATE_ADDRESSES);
export const deleteAddressesAction = createAction(DELETE_ADDRESSES);
