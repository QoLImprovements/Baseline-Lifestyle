/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Yeast breads",
  "id": "usda-fndds-2707709",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 43.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    },
    {
      "gramsPerUnit": 3.2,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "1-medium-or-regular-slice",
      "kind": "unit",
      "label": "1 medium or regular slice"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "1-small-or-thin-very-thin-slice",
      "kind": "unit",
      "label": "1 small or thin/very thin slice"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-slice-crust-not-eaten",
      "kind": "unit",
      "label": "1 slice, crust not eaten"
    }
  ],
  "name": "Bread, whole wheat",
  "nutritionPerBasis": {
    "calcium_mg": 163.0,
    "carbs_g": 43.1,
    "energy_kcal": 254.0,
    "fat_g": 3.55,
    "fibre_g": 6.0,
    "folate_ug": 42.0,
    "iron_mg": 2.56,
    "magnesium_mg": 77.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 212.0,
    "potassium_mg": 250.0,
    "protein_g": 12.3,
    "salt_g": 1.075,
    "sat_fat_g": 0.732,
    "sodium_mg": 430.0,
    "sugar_g": 4.41,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707709",
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
