/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-medium-single-serving-bag",
  "description": "Tortilla, corn, other chips",
  "id": "usda-fndds-2707428",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    }
  ],
  "name": "Bean chips",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 53.1,
    "energy_kcal": 448.0,
    "fat_g": 21.6,
    "fibre_g": 9.7,
    "folate_ug": 243.0,
    "iron_mg": 4.01,
    "magnesium_mg": 96.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 255.0,
    "potassium_mg": 547.0,
    "protein_g": 14.6,
    "salt_g": 1.025,
    "sat_fat_g": 2.96,
    "sodium_mg": 410.0,
    "sugar_g": 1.08,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 4.97,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707428",
  "state": "Unspecified",
  "subcategory": "Tortilla, corn, other chips",
  "tags": [
    "legumes-and-pulses",
    "tortilla-corn-other-chips",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
