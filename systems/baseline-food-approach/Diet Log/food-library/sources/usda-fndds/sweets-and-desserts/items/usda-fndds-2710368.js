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
  "id": "usda-fndds-2710368",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-pouch-regular-size",
      "kind": "unit",
      "label": "1 pouch/regular size"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Candy, fruit leather",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 85.8,
    "energy_kcal": 371.0,
    "fat_g": 3.0,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.01,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 294.0,
    "protein_g": 0.1,
    "salt_g": 0.7925,
    "sat_fat_g": 0.672,
    "sodium_mg": 317.0,
    "sugar_g": 49.2,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 120.0,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 18.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710368",
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
