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
  "id": "usda-fndds-2707615",
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
      "gramsPerUnit": 9.0,
      "key": "1-slice-snack-size",
      "kind": "unit",
      "label": "1 slice, snack-size"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-small-or-thin-very-thin-slice",
      "kind": "unit",
      "label": "1 small or thin/very thin slice"
    },
    {
      "gramsPerUnit": 2.4,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 413.0,
      "key": "1-loaf-10-3-4-long",
      "kind": "unit",
      "label": "1 loaf (10-3/4\" long)"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.0,
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
  "name": "Bread, Italian, Grecian, Armenian, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 115.0,
    "carbs_g": 52.9,
    "energy_kcal": 285.0,
    "fat_g": 3.0,
    "fibre_g": 2.3,
    "folate_ug": 100.0,
    "iron_mg": 3.79,
    "magnesium_mg": 29.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 104.0,
    "potassium_mg": 136.0,
    "protein_g": 10.4,
    "salt_g": 1.6975,
    "sat_fat_g": 0.598,
    "sodium_mg": 679.0,
    "sugar_g": 5.15,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707615",
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
