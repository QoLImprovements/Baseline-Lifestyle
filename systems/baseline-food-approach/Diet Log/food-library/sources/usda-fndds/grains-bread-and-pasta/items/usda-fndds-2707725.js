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
  "id": "usda-fndds-2707725",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "1-slice-crust-not-eaten",
      "kind": "unit",
      "label": "1 slice, crust not eaten"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-medium-or-regular-slice",
      "kind": "unit",
      "label": "1 medium or regular slice"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-slice-snack-size",
      "kind": "unit",
      "label": "1 slice, snack-size"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-small-or-thin-very-thin-slice",
      "kind": "unit",
      "label": "1 small or thin/very thin slice"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    }
  ],
  "name": "Bread, wheat or cracked wheat, with raisins, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 63.4,
    "energy_kcal": 321.0,
    "fat_g": 4.08,
    "fibre_g": 4.3,
    "folate_ug": 57.0,
    "iron_mg": 3.17,
    "magnesium_mg": 46.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 147.0,
    "potassium_mg": 263.0,
    "protein_g": 9.51,
    "salt_g": 1.2675,
    "sat_fat_g": 1.51,
    "sodium_mg": 507.0,
    "sugar_g": 20.6,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707725",
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
