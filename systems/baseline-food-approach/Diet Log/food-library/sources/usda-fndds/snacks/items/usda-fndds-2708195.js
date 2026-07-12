/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "quantity-not-specified",
  "description": "Tortilla, corn, other chips",
  "id": "usda-fndds-2708195",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-nut",
      "kind": "unit",
      "label": "1 nut"
    }
  ],
  "name": "Corn nuts",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 71.9,
    "energy_kcal": 446.0,
    "fat_g": 15.6,
    "fibre_g": 6.9,
    "folate_ug": 0.0,
    "iron_mg": 1.67,
    "magnesium_mg": 113.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 275.0,
    "potassium_mg": 278.0,
    "protein_g": 8.5,
    "salt_g": 1.41,
    "sat_fat_g": 2.43,
    "sodium_mg": 564.0,
    "sugar_g": 0.61,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.98,
    "vitamin_k_ug": 9.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708195",
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
