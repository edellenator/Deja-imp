const { faker } = require("@faker-js/faker");

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

  await User.collection.insertMany(userData);

  // Vendor Data (vendorName, phoneNumber, street, city, zip, contacts, notes) products will be added after product creation
  let VendorData = [];
  for (let i = 0; i < 10; i++) {
    const vendorName = faker.company.companyName();
    const street = faker.address.street();
    const city = faker.address.city();
    const state = faker.address.state();
    const zip = faker.address.zipCode();

    const contact = [];
    for (let i = 0; i < 2; i++) {
      const contactName = faker.name.findName();
      const title = faker.name.jobTitle();
      const email = faker.internet.email();
      const phoneNumber = faker.phone.number("###-###-####");

      contact.push({ contactName, title, email, phoneNumber });
    }

    const notes = [];
    for (let i = 0; i < 2; i++) {
      const notesBody = faker.lorem.text();
      notes.push({ noteBody });
    }

    VendorData.push({
      vendorName,
      street,
      city,
      state,
      zip,
      contact,
      notes,
    });
  }

  await Vendor.collection.insertMany(VendorData);
  const createdVendors = await Vendor.find();

  // Product Data (name, SKU, stock, description, color, vendor)
  for (let i = 0; i < 100; i++) {
    const randomVendorIndex = Math.floor(Math.random() * createdVendors.length);
    const randomVendor = createdVendors[randomVendorIndex];

    const ProductData = {
      name: faker.commerce.product(),
      SKU: faker.random.alphaNumeric(10),
      stock: Math.floor(Math.random() * 100),
      description: faker.commerce.productDescription(),
      color: faker.color.human(),
      vendor: randomVendor._id,
    };

    await Product.collection.insertOne(ProductData);
    const createdProduct = await Product.findOne({ SKU: ProductData.SKU });

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
