/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-large-single-serving-bag",
  "description": "Tortilla, corn, other chips",
  "id": "usda-fndds-2708208",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-chip",
      "kind": "unit",
      "label": "1 chip"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    }
  ],
  "name": "Tortilla chips, other flavors (Doritos)",
  "nutritionPerBasis": {
    "calcium_mg": 137.0,
    "carbs_g": 60.8,
    "energy_kcal": 519.0,
    "fat_g": 27.4,
    "fibre_g": 5.1,
    "folate_ug": 13.0,
    "iron_mg": 1.16,
    "magnesium_mg": 75.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 252.0,
    "potassium_mg": 223.0,
    "protein_g": 7.36,
    "salt_g": 1.7275,
    "sat_fat_g": 3.88,
    "sodium_mg": 691.0,
    "sugar_g": 2.59,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 6.24,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708208",
  "state": "Unspecified",
  "subcategory": "Tortilla, corn, other chips",
  "tags": [
    "snacks",
    "tortilla-corn-other-chips",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
