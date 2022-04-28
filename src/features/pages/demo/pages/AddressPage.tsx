import React, { useState } from "react";
import { AddressSearch, AddressSearchDetailOption, validationStatuses } from "src/library";
import { AddressesList } from "src/mocks/AddressSearch";

const AddressPage = () => {
    const [address, setAddress] = useState<AddressSearchDetailOption | null>(null);
    const [address2, setAddress2] = useState<AddressSearchDetailOption | null>(null);
    const [address3, setAddress3] = useState<AddressSearchDetailOption | null>(null);
    const [address4, setAddress4] = useState<AddressSearchDetailOption | null>(AddressesList[0]);

    const searchQuery = (address: string) =>
        new Promise<AddressSearchDetailOption[]>((resolve) => {
            setTimeout(() => {
                resolve(
                    AddressesList.filter(({ value }) => value.toLocaleLowerCase().includes(address.toLocaleLowerCase()))
                );
            }, 1000);
        }) as Promise<AddressSearchDetailOption[]>;

    return (
        <div className="page">
            <div className="page-name">Address</div>
            <div className="page-content">
                <AddressSearch
                    label="Address search"
                    placeholder="Search address"
                    id="address_search_1"
                    value={address}
                    onChange={setAddress}
                    searchQuery={searchQuery}
                />
                <AddressSearch
                    label="Address search disabled"
                    placeholder="Search address"
                    id="address_search_2"
                    value={address2}
                    onChange={setAddress2}
                    searchQuery={searchQuery}
                    disabled={true}
                />
                <AddressSearch
                    label="Address search with error"
                    placeholder="Search address"
                    id="address_search_3"
                    value={address3}
                    onChange={setAddress3}
                    searchQuery={searchQuery}
                    validation={{ status: validationStatuses.ERROR, message: "Error message" }}
                />
                <AddressSearch
                    label="Address search with default value"
                    placeholder="Search address"
                    id="address_search_4"
                    value={address4}
                    onChange={setAddress4}
                    searchQuery={searchQuery}
                />
            </div>
        </div>
    );
};

export default AddressPage;
