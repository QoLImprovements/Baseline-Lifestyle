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
  "id": "usda-fndds-2707779",
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
      "gramsPerUnit": 33.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "1-medium-or-regular-slice",
      "kind": "unit",
      "label": "1 medium or regular slice"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-slice-snack-size",
      "kind": "unit",
      "label": "1 slice, snack-size"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-slice-crust-not-eaten",
      "kind": "unit",
      "label": "1 slice, crust not eaten"
    }
  ],
  "name": "Bread, multigrain, with raisins, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 51.6,
    "energy_kcal": 295.0,
    "fat_g": 4.21,
    "fibre_g": 7.8,
    "folate_ug": 64.0,
    "iron_mg": 2.67,
    "magnesium_mg": 81.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 236.0,
    "potassium_mg": 309.0,
    "protein_g": 13.6,
    "salt_g": 0.8975,
    "sat_fat_g": 0.873,
    "sodium_mg": 359.0,
    "sugar_g": 13.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707779",
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
