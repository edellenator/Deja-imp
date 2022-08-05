import { gql } from '@apollo/client';

export const ADD_CONTACT = gql `
    mutation($input: ContactInput, $vendorId: ID!) {
        addContact(input: $input, vendorId: $vendorId) {
            _id
            vendorName
            phoneNumber
            street
            state
            zip
            city
            contact {
                _id
                contactName
                title
                email
            }
        }
    }
`

export const ADD_PRODUCT = gql `
    mutation($input: ProductInput) {
        addProduct(input: $input) {
        _id
        name
        SKU
        stock
        description
        color
        }
    }
`