import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;
export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

export const QUERY_PRODUCT = gql`
  query getProduct($id: ID!) {
    product(_id: $id) {
      _id
      name
      SKU
      stock
      description
      color
      vendor {
        _id
        vendorName
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts {
    products {
      _id
      name
      SKU
      stock
      description
      color
      vendor {
        _id
        vendorName
      }
    }
  }
`;

export const QUERY_VENDOR = gql`
  query getVendor($id: ID!) {
    vendor(_id: $id) {
      _id
      vendorName
      street
      state
      zip
      city
      contact {
        _id
        contactName
        title
        email
        phoneNumber
      }
      products {
        _id
        name
        SKU
        stock
        description
        color
      }
      notes {
        _id
        notesBody
        createdAt
        author {
          _id
        }
      }
    }
  }
`;

export const QUERY_VENDORS = gql`
  query getVendors {
    vendors {
      _id
      vendorName
      street
      state
      zip
      city
      contact {
        _id
        contactName
        title
        email
        phoneNumber
      }
      products {
        _id
        name
        SKU
        stock
        description
        color
      }
      notes {
        _id
        notesBody
        createdAt
        author {
          _id
        }
      }
    }
  }
`;
