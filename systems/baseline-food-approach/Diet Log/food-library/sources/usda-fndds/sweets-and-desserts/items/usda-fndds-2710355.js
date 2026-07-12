/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-miniature-bite-size",
  "description": "Candy not containing chocolate",
  "id": "usda-fndds-2710355",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-fun-snack-size",
      "kind": "unit",
      "label": "1 fun/snack size"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-pouch-regular-size",
      "kind": "unit",
      "label": "1 pouch/regular size"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
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
      "gramsPerUnit": 120.0,
      "key": "1-large-king-size",
      "kind": "unit",
      "label": "1 large/king size"
    }
  ],
  "name": "Candy, nougat with nuts",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 72.6,
    "energy_kcal": 444.0,
    "fat_g": 13.3,
    "fibre_g": 3.6,
    "folate_ug": 28.0,
    "iron_mg": 1.25,
    "magnesium_mg": 61.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 126.0,
    "potassium_mg": 415.0,
    "protein_g": 8.38,
    "salt_g": 0.33,
    "sat_fat_g": 3.24,
    "sodium_mg": 132.0,
    "sugar_g": 42.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 2.62,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710355",
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
