const sampleListings = [
  {
    title: "Heritage Palace Stay",
    description: "Stay in a restored royal palace with traditional Rajasthani hospitality.",
    image: {
      url: "https://images.unsplash.com/photo-1548013146-72479768bada",
      filename: "heritage-palace"
    },
    price: 12000,
    location: "Jaipur",
    country: "India",
    category: "city"
  },
  {
    title: "Backwater Houseboat",
    description: "Traditional houseboat stay with scenic backwater views.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "backwater-houseboat"
    },
    price: 9500,
    location: "Alappuzha",
    country: "India",
    category: "nature"
  },
  {
    title: "Riverside Retreat",
    description: "Calm and relaxing stay along the riverbank.",
    image: {
      url: "https://images.unsplash.com/photo-1472224371017-08207f84aaae",
      filename: "riverside-retreat"
    },
    price: 5400,
    location: "Rishikesh",
    country: "India",
    category: "nature"
  },
  {
    title: "Coffee Plantation Stay",
    description: "Stay amidst lush coffee plantations with guided plantation tours.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      filename: "coffee-plantation"
    },
    price: 5800,
    location: "Coorg",
    country: "India",
    category: "nature"
  },
  {
    title: "Island View Resort",
    description: "Relaxing resort with stunning views of nearby islands.",
    image: {
      url: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210d8",
      filename: "island-view"
    },
    price: 11000,
    location: "Port Blair",
    country: "India",
    category: "beach"
  },
  {
    title: "Wildlife Safari Lodge",
    description: "Stay close to nature with guided wildlife safari experiences.",
    image: {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      filename: "wildlife-safari"
    },
    price: 8200,
    location: "Jim Corbett",
    country: "India",
    category: "nature"
  },
  {
    title: "Luxury Desert Villa",
    description: "Private villa offering desert views and premium comfort.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      filename: "luxury-desert-villa"
    },
    price: 14000,
    location: "Dubai",
    country: "UAE",
    category: "desert"
  },
  {
    title: "Countryside Farm Stay",
    description: "Authentic farm experience with organic food and open fields.",
    image: {
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      filename: "farm-stay"
    },
    price: 3000,
    location: "Nashik",
    country: "India",
    category: "farm"
  },
  {
    title: "Mountain View Homestay",
    description: "Peaceful homestay surrounded by mountains and greenery.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      filename: "mountain-view"
    },
    price: 3200,
    location: "Manali",
    country: "India",
    category: "mountain"
  },
  {
    title: "Desert Camp Stay",
    description: "Experience luxury camping in the desert with cultural performances.",
    image: {
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      filename: "desert-camp"
    },
    price: 6000,
    location: "Jaisalmer",
    country: "India",
    category: "desert"
  },
  {
    title: "Hilltop Resort",
    description: "Scenic resort offering panoramic valley views and fresh air.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      filename: "hilltop-resort"
    },
    price: 7000,
    location: "Ooty",
    country: "India",
    category: "mountain"
  },
  {
    title: "Lake View Cottage",
    description: "Cozy cottage with a calm lake view, perfect for weekend getaways.",
    image: {
      url: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d99",
      filename: "lake-view-cottage"
    },
    price: 4800,
    location: "Udaipur",
    country: "India",
    category: "nature"
  },
  {
    title: "International Backpackers Hostel",
    description: "Low-cost hostel with shared rooms and vibrant community vibe.",
    image: {
      url: "https://images.unsplash.com/photo-1551776235-dde6d4829808",
      filename: "backpackers-hostel"
    },
    price: 900,
    location: "Bangkok",
    country: "Thailand",
    category: "city"
  },

  /* 🔥 EXTRA LISTINGS (to balance categories) */

  {
    title: "Infinity Pool Luxury Resort",
    description: "Premium resort featuring an infinity swimming pool with ocean views.",
    image: {
      url: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210d8",
      filename: "infinity-pool"
    },
    price: 15000,
    location: "Goa",
    country: "India",
    category: "pool"
  },
  {
    title: "Beachside Bamboo Hut",
    description: "Eco-friendly bamboo huts right next to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "beach-hut"
    },
    price: 4200,
    location: "Gokarna",
    country: "India",
    category: "beach"
  },
  {
    title: "Urban Business Hotel",
    description: "Modern hotel in the heart of the city, ideal for business travelers.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      filename: "urban-hotel"
    },
    price: 8500,
    location: "Bengaluru",
    country: "India",
    category: "city"
  }
];

module.exports = { data: sampleListings };
