/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-small-or-thin-very-thin-slice",
  "description": "Yeast breads",
  "id": "usda-fndds-2707636",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-small-or-thin-very-thin-slice",
      "kind": "unit",
      "label": "1 small or thin/very thin slice"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-slice-snack-size",
      "kind": "unit",
      "label": "1 slice, snack-size"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "1-slice-crust-not-eaten",
      "kind": "unit",
      "label": "1 slice, crust not eaten"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "1-medium-or-regular-slice",
      "kind": "unit",
      "label": "1 medium or regular slice"
    }
  ],
  "name": "Bread, reduced calorie and/or high fiber, white or NFS, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 48.7,
    "energy_kcal": 227.0,
    "fat_g": 2.75,
    "fibre_g": 10.7,
    "folate_ug": 89.0,
    "iron_mg": 3.5,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 133.0,
    "potassium_mg": 84.0,
    "protein_g": 9.56,
    "salt_g": 1.315,
    "sat_fat_g": 0.603,
    "sodium_mg": 526.0,
    "sugar_g": 5.23,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707636",
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
