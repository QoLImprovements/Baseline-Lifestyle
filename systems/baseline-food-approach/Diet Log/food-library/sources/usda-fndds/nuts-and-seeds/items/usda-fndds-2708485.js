/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "quantity-not-specified",
  "description": "Ready-to-eat cereal, higher sugar (>21.2g/100g)",
  "id": "usda-fndds-2708485",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-prepackaged-single-serving",
      "kind": "unit",
      "label": "1 prepackaged single serving"
    }
  ],
  "name": "Cereal, other, peanut butter",
  "nutritionPerBasis": {
    "calcium_mg": 331.0,
    "carbs_g": 73.0,
    "energy_kcal": 422.0,
    "fat_g": 11.1,
    "fibre_g": 5.0,
    "folate_ug": 144.0,
    "iron_mg": 10.2,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 117.0,
    "potassium_mg": 129.0,
    "protein_g": 7.34,
    "salt_g": 1.3125,
    "sat_fat_g": 1.19,
    "sodium_mg": 525.0,
    "sugar_g": 31.1,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 22.9,
    "vitamin_e_mg": 1.75,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708485",
  "state": "Unspecified",
  "subcategory": "Ready-to-eat cereal, higher sugar (>21.2g/100g)",
  "tags": [
    "nuts-and-seeds",
    "ready-to-eat-cereal-higher-sugar-21-2g-100g",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
