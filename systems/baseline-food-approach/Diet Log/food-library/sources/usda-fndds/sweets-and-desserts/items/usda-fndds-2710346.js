/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-fun-snack-size",
  "description": "Candy containing chocolate",
  "id": "usda-fndds-2710346",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-fun-snack-size",
      "kind": "unit",
      "label": "1 fun/snack size"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-large-king-size",
      "kind": "unit",
      "label": "1 large/king size"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-sharing-movie-theater-size",
      "kind": "unit",
      "label": "1 sharing/movie theater size"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-pouch-regular-size",
      "kind": "unit",
      "label": "1 pouch/regular size"
    }
  ],
  "name": "Chocolate candy, nougat filled with nuts",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 63.2,
    "energy_kcal": 483.0,
    "fat_g": 22.7,
    "fibre_g": 2.2,
    "folate_ug": 20.0,
    "iron_mg": 0.68,
    "magnesium_mg": 58.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 142.0,
    "potassium_mg": 286.0,
    "protein_g": 6.46,
    "salt_g": 0.585,
    "sat_fat_g": 10.6,
    "sodium_mg": 234.0,
    "sugar_g": 52.2,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.22,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710346",
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
