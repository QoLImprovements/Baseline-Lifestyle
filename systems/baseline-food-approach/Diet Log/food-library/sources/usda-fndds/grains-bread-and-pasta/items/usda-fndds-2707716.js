/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-large-or-thick-slice",
  "description": "Yeast breads",
  "id": "usda-fndds-2707716",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
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
      "key": "1-medium-or-regular-slice",
      "kind": "unit",
      "label": "1 medium or regular slice"
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
    }
  ],
  "name": "Bread, whole wheat, with raisins",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 56.4,
    "energy_kcal": 290.0,
    "fat_g": 4.14,
    "fibre_g": 6.5,
    "folate_ug": 35.0,
    "iron_mg": 2.22,
    "magnesium_mg": 73.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 205.0,
    "potassium_mg": 322.0,
    "protein_g": 8.63,
    "salt_g": 1.2,
    "sat_fat_g": 1.48,
    "sodium_mg": 480.0,
    "sugar_g": 19.5,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707716",
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
