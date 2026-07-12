/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "quantity-not-specified",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707577",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-package",
      "kind": "unit",
      "label": "1 package"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Trail mix with chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 79.0,
    "carbs_g": 48.3,
    "energy_kcal": 503.0,
    "fat_g": 32.3,
    "fibre_g": 5.9,
    "folate_ug": 52.0,
    "iron_mg": 2.15,
    "magnesium_mg": 119.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 324.0,
    "potassium_mg": 489.0,
    "protein_g": 11.6,
    "salt_g": 0.365,
    "sat_fat_g": 7.0,
    "sodium_mg": 146.0,
    "sugar_g": 34.8,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 5.48,
    "vitamin_k_ug": 7.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707577",
  "state": "Unspecified",
  "subcategory": "Nuts and seeds",
  "tags": [
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
