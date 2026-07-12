/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-slice-crust-not-eaten",
  "description": "Yeast breads",
  "id": "usda-fndds-2707780",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-slice-crust-not-eaten",
      "kind": "unit",
      "label": "1 slice, crust not eaten"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "1-small-or-thin-very-thin-slice",
      "kind": "unit",
      "label": "1 small or thin/very thin slice"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-slice-snack-size",
      "kind": "unit",
      "label": "1 slice, snack-size"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "1-medium-or-regular-slice",
      "kind": "unit",
      "label": "1 medium or regular slice"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    }
  ],
  "name": "Bread, multigrain, reduced calorie and/or high fiber",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 44.9,
    "energy_kcal": 207.0,
    "fat_g": 2.55,
    "fibre_g": 10.7,
    "folate_ug": 95.0,
    "iron_mg": 3.41,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 148.0,
    "potassium_mg": 109.0,
    "protein_g": 8.91,
    "salt_g": 1.1625,
    "sat_fat_g": 0.551,
    "sodium_mg": 465.0,
    "sugar_g": 4.63,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707780",
  "state": "Unspecified",
  "subcategory": "Yeast breads",
  "tags": [
    "grains-bread-and-pasta",
    "unspecified",
    "yeast-breads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
