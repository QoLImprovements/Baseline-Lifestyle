/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-sharing-movie-theater-size",
  "description": "Candy not containing chocolate",
  "id": "usda-fndds-2710364",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-sharing-movie-theater-size",
      "kind": "unit",
      "label": "1 sharing/movie theater size"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-large-king-size",
      "kind": "unit",
      "label": "1 large/king size"
    },
    {
      "gramsPerUnit": 2.0,
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
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
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
      "gramsPerUnit": 2.0,
      "key": "1-stick",
      "kind": "unit",
      "label": "1 stick"
    }
  ],
  "name": "Candy, fruit flavored pieces",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 94.4,
    "energy_kcal": 400.0,
    "fat_g": 2.28,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.15,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 2.0,
    "potassium_mg": 8.0,
    "protein_g": 0.1,
    "salt_g": 0.065,
    "sat_fat_g": 2.06,
    "sodium_mg": 26.0,
    "sugar_g": 69.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710364",
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
