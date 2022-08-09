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

  for (let i = 0; i < 10; i++) {
    const vendorData = {
      vendorName: faker.company.companyName(),
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode("#####"),
    };

    const newVendor = await Vendor.create(vendorData);
    // const newVendorId = newVendor._id.toString().split('"')[0];

    // add contactData to vendor
    for (let i = 0; i < 2; i++) {
      const contactData = {
        contactName: faker.name.findName(),
        title: faker.name.jobTitle(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number("###-###-####"),
      };

      await Vendor.findByIdAndUpdate(
        { _id: newVendor._id },
        { $addToSet: { contact: contactData } },
        { runValidators: true }
      );
    }

    // add note data
    for (let i = 0; i < 2; i++) {
      const notesData = {
        notesBody: faker.lorem.text(10),
      };

      await Vendor.findByIdAndUpdate(
        { _id: newVendor._id },
        { $addToSet: { notes: notesData } },
        { runValidators: true }
      );
    }
  }

  // returns an array of all created vendors
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

    const newProduct = await Product.create(ProductData);

    // add the newly created product to the vendor
    await Vendor.findByIdAndUpdate(
      { _id: randomVendor._id },
      { $addToSet: { products: { _id: newProduct._id } } },
      { runValidators: true }
    );
  }

  console.log("Database seeded!");
  process.exit(0);
});
