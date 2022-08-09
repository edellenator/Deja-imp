import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const ADD_VENDOR = gql`
  mutation addVendor(
    $input: VendorInput
    $contactName: String
    $title: String
    $email: String
    $phoneNumber: String
  ) {
    addVendor(
      input: $input
      contactName: $contactName
      title: $title
      email: $email
      phoneNumber: $phoneNumber
    ) {
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
      }
    }
  }
`;

export const ADD_CONTACT = gql`
  mutation addContact($input: ContactInput, $vendorId: ID!) {
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
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation ($input: ProductInput) {
    addProduct(input: $input) {
      _id
      name
      SKU
      stock
      description
      color
    }
  }
`;
export const DELETE_NOTE = gql`
  mutation deleteNote($vendorId: ID!, $id: ID!) {
    deleteNote(vendorId: $vendorId, _id: $id) {
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
      }
    }
  }
`;

export const ADD_NOTE = gql`
  mutation addNote($vendorId: ID!, $noteBody: String!) {
    addNote(vendorId: $vendorId, notesBody: $noteBody) {
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
      }
    }
  }
`;

export const UPDATE_STOCK = gql`
  mutation updateStock($id: ID!, $stock: Int!) {
    updateStock(_id: $id, stock: $stock) {
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

export const UPDATE_VENDOR = gql`
  mutation updateVendor($id: ID!, $input: VendorInput!) {
    updateVendor(_id: $id, input: $input) {
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
      }
    }
  }
`;

export const DELETE_VENDOR = gql`
  mutation deleteVendor($id: ID!) {
    deleteVendor(_id: $id) {
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
      }
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(_id: $id) {
      _id
      name
      SKU
      stock
      description
      color
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(_id: $id) {
      _id
      username
      email
    }
  }
`;

export const DELETE_CONTACT = gql`
  mutation deleteContact($vendorId: ID!, $email: String!) {
    deleteContact(vendorId: $vendorId, email: $email) {
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
      }
    }
  }
`;
