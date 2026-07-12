/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-small-single-serving-bag",
  "description": "Tortilla, corn, other chips",
  "id": "usda-fndds-2709710",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-chip",
      "kind": "unit",
      "label": "1 chip"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Sweet potato chips",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 56.5,
    "energy_kcal": 529.0,
    "fat_g": 32.2,
    "fibre_g": 8.8,
    "folate_ug": 37.0,
    "iron_mg": 2.11,
    "magnesium_mg": 65.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 144.0,
    "potassium_mg": 920.0,
    "protein_g": 2.92,
    "salt_g": 0.5675,
    "sat_fat_g": 2.93,
    "sodium_mg": 227.0,
    "sugar_g": 8.78,
    "vitamin_a_ug": 1180.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 9.77,
    "vitamin_k_ug": 24.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709710",
  "state": "Unspecified",
  "subcategory": "Tortilla, corn, other chips",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "tortilla-corn-other-chips",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
