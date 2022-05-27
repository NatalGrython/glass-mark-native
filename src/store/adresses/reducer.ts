import { createReducer } from "@reduxjs/toolkit";
import { Address } from "../../types/address";
import { deleteAddressesAction, updateAddressesAction } from "./actions";

interface AddressesState {
  addresses: Address[];
}

const initialState: AddressesState = {
  addresses: [],
};

export const addressesReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(updateAddressesAction, (state, action) => {
      state.addresses = action.payload;
    })
    .addCase(deleteAddressesAction, (state) => {
      state.addresses = [];
    })
);
