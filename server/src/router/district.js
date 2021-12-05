const express = require("express");
const DistrictEntity = require("../entities/district");
const RestaurantEntity = require("../entities/restaurant");

const districtRouter = express.Router();

districtRouter.get("/:districtId", async (req, res) => {
  const { districtId } = req.params;
  const districtRestaurant = await RestaurantEntity.findAll({
    //이건 지역구의 식당들이 다 나오고
    where: { district_Id: districtId },
  });
  res.json(districtRestaurant);
});

module.exports = districtRouter;
