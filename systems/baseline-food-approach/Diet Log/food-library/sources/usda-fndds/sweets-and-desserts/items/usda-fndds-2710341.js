/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Candy containing chocolate",
  "id": "usda-fndds-2710341",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-fun-snack-size",
      "kind": "unit",
      "label": "1 fun/snack size"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-sharing-movie-theater-size",
      "kind": "unit",
      "label": "1 sharing/movie theater size"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-pouch-regular-size",
      "kind": "unit",
      "label": "1 pouch/regular size"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-large-king-size",
      "kind": "unit",
      "label": "1 large/king size"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chocolate candy, caramel filled",
  "nutritionPerBasis": {
    "calcium_mg": 169.0,
    "carbs_g": 66.4,
    "energy_kcal": 474.0,
    "fat_g": 21.0,
    "fibre_g": 2.0,
    "folate_ug": 9.0,
    "iron_mg": 1.47,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 309.0,
    "protein_g": 6.43,
    "salt_g": 0.3625,
    "sat_fat_g": 12.1,
    "sodium_mg": 145.0,
    "sugar_g": 57.1,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710341",
  "state": "Unspecified",
  "subcategory": "Candy containing chocolate",
  "tags": [
    "candy-containing-chocolate",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
