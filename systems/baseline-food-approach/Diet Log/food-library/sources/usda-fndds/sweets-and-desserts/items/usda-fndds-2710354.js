/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Candy not containing chocolate",
  "id": "usda-fndds-2710354",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-sharing-movie-theater-size",
      "kind": "unit",
      "label": "1 sharing/movie theater size"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-pouch-regular-size",
      "kind": "unit",
      "label": "1 pouch/regular size"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-fun-snack-size",
      "kind": "unit",
      "label": "1 fun/snack size"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-large-king-size",
      "kind": "unit",
      "label": "1 large/king size"
    }
  ],
  "name": "Candy, caramel",
  "nutritionPerBasis": {
    "calcium_mg": 87.0,
    "carbs_g": 82.4,
    "energy_kcal": 384.0,
    "fat_g": 5.7,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.47,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 86.0,
    "potassium_mg": 165.0,
    "protein_g": 3.1,
    "salt_g": 0.36,
    "sat_fat_g": 1.72,
    "sodium_mg": 144.0,
    "sugar_g": 60.9,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710354",
  "state": "Unspecified",
  "subcategory": "Candy not containing chocolate",
  "tags": [
    "candy-not-containing-chocolate",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
