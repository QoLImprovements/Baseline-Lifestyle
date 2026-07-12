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
  "id": "usda-fndds-2707635",
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
      "gramsPerUnit": 29.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "1-small-or-thin-very-thin-slice",
      "kind": "unit",
      "label": "1 small or thin/very thin slice"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "1-medium-or-regular-slice",
      "kind": "unit",
      "label": "1 medium or regular slice"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-slice-snack-size",
      "kind": "unit",
      "label": "1 slice, snack-size"
    }
  ],
  "name": "Bread, reduced calorie and/or high fiber, white or NFS",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 44.3,
    "energy_kcal": 207.0,
    "fat_g": 2.5,
    "fibre_g": 9.7,
    "folate_ug": 95.0,
    "iron_mg": 3.19,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 121.0,
    "potassium_mg": 76.0,
    "protein_g": 8.7,
    "salt_g": 1.1975,
    "sat_fat_g": 0.549,
    "sodium_mg": 479.0,
    "sugar_g": 4.76,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707635",
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
