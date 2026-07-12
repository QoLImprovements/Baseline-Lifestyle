/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Beef, excludes ground",
  "id": "usda-fndds-2705845",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-rib-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 rib (yield after cooking, bone removed)"
    }
  ],
  "name": "Beef, shortribs",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 12.1,
    "energy_kcal": 253.0,
    "fat_g": 14.1,
    "fibre_g": 0.3,
    "folate_ug": 6.0,
    "iron_mg": 1.34,
    "magnesium_mg": 19.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 146.0,
    "potassium_mg": 293.0,
    "protein_g": 18.2,
    "salt_g": 1.625,
    "sat_fat_g": 5.5,
    "sodium_mg": 650.0,
    "sugar_g": 9.89,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705845",
  "state": "Unspecified",
  "subcategory": "Beef, excludes ground",
  "tags": [
    "beef-excludes-ground",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
