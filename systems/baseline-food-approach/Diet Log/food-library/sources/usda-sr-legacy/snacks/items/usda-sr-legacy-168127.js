/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "cup-crushed",
  "description": "Snacks",
  "id": "usda-sr-legacy-168127",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "cup-crushed",
      "kind": "unit",
      "label": "cup, crushed"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "10-chips",
      "kind": "unit",
      "label": "10 chips"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "bag-single-serving",
      "kind": "unit",
      "label": "bag, single serving"
    }
  ],
  "name": "Snacks, corn-based, extruded, chips, unsalted",
  "nutritionPerBasis": {
    "calcium_mg": 124.0,
    "carbs_g": 57.4,
    "energy_kcal": 557.0,
    "fat_g": 33.4,
    "fibre_g": 4.4,
    "folate_ug": 7.0,
    "iron_mg": 1.7,
    "magnesium_mg": 70.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 184.0,
    "potassium_mg": 185.0,
    "protein_g": 6.6,
    "salt_g": 0.0375,
    "sat_fat_g": 4.34,
    "sodium_mg": 15.0,
    "sugar_g": 1.41,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.36,
    "vitamin_k_ug": 33.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168127",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
