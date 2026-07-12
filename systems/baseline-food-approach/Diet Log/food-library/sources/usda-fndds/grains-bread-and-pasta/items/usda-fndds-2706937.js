/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-double-hamburger",
  "description": "Burgers",
  "id": "usda-fndds-2706937",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-double-hamburger",
      "kind": "unit",
      "label": "1 double hamburger"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Double hamburger, on wheat bun, 2 small patties",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 12.9,
    "energy_kcal": 285.0,
    "fat_g": 16.7,
    "fibre_g": 1.5,
    "folate_ug": 36.0,
    "iron_mg": 2.62,
    "magnesium_mg": 30.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 171.0,
    "potassium_mg": 271.0,
    "protein_g": 19.6,
    "salt_g": 0.82,
    "sat_fat_g": 6.47,
    "sodium_mg": 328.0,
    "sugar_g": 1.48,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706937",
  "state": "Unspecified",
  "subcategory": "Burgers",
  "tags": [
    "burgers",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
