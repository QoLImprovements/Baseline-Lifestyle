/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-slice-snack-size",
  "description": "Yeast breads",
  "id": "usda-fndds-2707649",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-slice-snack-size",
      "kind": "unit",
      "label": "1 slice, snack-size"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "1-slice-crust-not-eaten",
      "kind": "unit",
      "label": "1 slice, crust not eaten"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-small-or-thin-very-thin-slice",
      "kind": "unit",
      "label": "1 small or thin/very thin slice"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-medium-or-regular-slice",
      "kind": "unit",
      "label": "1 medium or regular slice"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    }
  ],
  "name": "Bread, sweet potato, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 49.9,
    "energy_kcal": 265.0,
    "fat_g": 3.15,
    "fibre_g": 1.9,
    "folate_ug": 63.0,
    "iron_mg": 3.45,
    "magnesium_mg": 28.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 104.0,
    "potassium_mg": 173.0,
    "protein_g": 9.5,
    "salt_g": 1.3025,
    "sat_fat_g": 1.06,
    "sodium_mg": 521.0,
    "sugar_g": 3.88,
    "vitamin_a_ug": 89.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707649",
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
