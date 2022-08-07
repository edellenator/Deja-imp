const faker = require("@faker-js/faker");

const db = require("../config/connection");
const { User, Product, Vendor } = require("../models");

db.once("open", async () => {
  await User.deleteMany({});
  await Product.deleteMany({});
  await Vendor.deleteMany({});

  // User Data (username, email, password)
  let userData = [];
  for (let i = 0; i < 20; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password(12);

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // Vendor Data (vendorName, phoneNumber, street, city, zip, contacts, notes) products will be added after product creation
  let VendorData = [];
  for (let i = 0; i < 10; i++) {
    const vendorName = faker.company.name();
    const phoneNumber = faker.phone.number();
    const street = faker.address.street();
    const city = faker.address.city();
    const zip = faker.address.zipCode();

    const contacts = [];
    for (let i = 0; i < 2; i++) {
      const contactName = faker.name.fullName();
      const title = faker.name.jobTitle();
      const email = faker.internet.email();

      contacts.push({ contactName, title, email });
    }

    const notes = [];
    for (let i = 0; i < 2; i++) {
      const noteBody = faker.lorem.text();
      const randomUserIndex = Math.floor(
        Math.random() * createdUsers.ops.length
      );
      const randomUser = createdUsers.ops[randomUserIndex];
      const createdBy = randomUser._id;

      notes.push({ noteBody, createdBy });
    }

    VendorData.push({
      vendorName,
      phoneNumber,
      street,
      city,
      zip,
      contacts,
      notes,
    });
  }

  const createdVendors = await Vendor.collection.insertMany(VendorData);

  // Product Data (name, SKU, stock, description, color, vendor)
  for (let i = 0; i < 100; i++) {
    const randomVendorIndex = Math.floor(
      Math.random() * createdVendors.ops.length
    );
    const randomVendor = createdVendors.ops[randomVendorIndex];
    const ProductData = {
      name: faker.commerce.product(),
      SKU: faker.random.alphaNumeric(10),
      stock: Math.floor(Math.random() * 100),
      description: faker.commerce.productDescription(),
      color: faker.color.human(),
      vendor: randomVendor._id,
    };

    const createdProduct = await Product.collection.insert(ProductData);

    // add the newly created product to the vendor
    await Vendor.collection.updateOne(
      { _id: randomVendor._id },
      { $push: { products: { _id: createdProduct._id } } },
      { runValidators: true }
    );
  }

  console.log("Database seeded!");
  process.exit(0);
});
