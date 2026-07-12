/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-slice-crust-not-eaten",
  "description": "Yeast breads",
  "id": "usda-fndds-2707648",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "1-slice-crust-not-eaten",
      "kind": "unit",
      "label": "1 slice, crust not eaten"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "1-small-or-thin-very-thin-slice",
      "kind": "unit",
      "label": "1 small or thin/very thin slice"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-slice-snack-size",
      "kind": "unit",
      "label": "1 slice, snack-size"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-medium-or-regular-slice",
      "kind": "unit",
      "label": "1 medium or regular slice"
    }
  ],
  "name": "Bread, sweet potato",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 45.4,
    "energy_kcal": 241.0,
    "fat_g": 2.87,
    "fibre_g": 1.7,
    "folate_ug": 67.0,
    "iron_mg": 3.14,
    "magnesium_mg": 26.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 95.0,
    "potassium_mg": 157.0,
    "protein_g": 8.64,
    "salt_g": 1.185,
    "sat_fat_g": 0.96,
    "sodium_mg": 474.0,
    "sugar_g": 3.53,
    "vitamin_a_ug": 86.0,
    "vitamin_c_mg": 4.1,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707648",
  "state": "Unspecified",
  "subcategory": "Yeast breads",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "unspecified",
    "yeast-breads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
