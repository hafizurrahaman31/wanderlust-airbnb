const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
    const { category, search } = req.query;

    let query = {};

    // category filter
    if (category) {
        query.category = category;
    }

    // search filter
    if (search) {
        query.$or = [
            { location: { $regex: search, $options: "i" } },
            { country: { $regex: search, $options: "i" } },
            { title: { $regex: search, $options: "i" } }
        ];
    }

    const allListings = await Listing.find(query);

    res.render("listings/index.ejs", { allListings, category, search });
};


module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs")
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({path: "reviews", populate: {
        path: "author"
    }}).populate("owner");
    if (!listing){
        req.flash("error", "listing that you requested for does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing })
};

// module.exports.createListing = async (req, res) => {
//     // let url = req.file.path;
//     // let filename = req.file.filename
    
//     const newListing = new Listing(req.body.listing);
//     newListing.owner = req.user._id;
//     newListing.image = {url, filename};
//     await newListing.save();

//     req.flash("success", "New Listing Created!");
//     res.redirect("/listings");
// };

module.exports.createListing = async (req, res) => {

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;

    // ✅ only set image if file exists
    if (req.file) {
        newListing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
    }
    // else → schema default image is used automatically

    await newListing.save();

    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};


module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing){
        req.flash("error", "listing that you requested for does not exist!");
        return res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing, originalImageUrl });
};

// module.exports.updateListing = async (req, res) => {
//     let { id } = req.params;
//     let newListing = req.body.listing;

//     if (req.file) {
//         newListing.image = {
//             url: req.file.path,
//             filename: req.file.filename
//         };
//         await newListing.save()
//     }
    
//     await Listing.findByIdAndUpdate(id, { ...newListing })
//     res.redirect(`/listings/${id}`)
// };

module.exports.updateListing = async (req, res) => {
    const { id } = req.params;

    // update basic fields first
    const listing = await Listing.findByIdAndUpdate(
        id,
        { ...req.body.listing },
        { new: true }
    );

    // update image ONLY if a new file is uploaded
    if (req.file) {
        listing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
        await listing.save();
    }

    res.redirect(`/listings/${id}`);
};


module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
}