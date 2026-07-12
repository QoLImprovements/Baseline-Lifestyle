/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-piece-slice-any-size",
  "description": "Cakes and pies",
  "id": "usda-fndds-2707890",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-piece-slice-any-size",
      "kind": "unit",
      "label": "1 piece/slice, any size"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cake, pineapple, upside down",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 39.1,
    "energy_kcal": 273.0,
    "fat_g": 12.2,
    "fibre_g": 0.7,
    "folate_ug": 19.0,
    "iron_mg": 0.94,
    "magnesium_mg": 10.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 104.0,
    "potassium_mg": 74.0,
    "protein_g": 2.38,
    "salt_g": 0.535,
    "sat_fat_g": 4.54,
    "sodium_mg": 214.0,
    "sugar_g": 28.2,
    "vitamin_a_ug": 71.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 1.21,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707890",
  "state": "Unspecified",
  "subcategory": "Cakes and pies",
  "tags": [
    "cakes-and-pies",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
