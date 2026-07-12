/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "10-chips",
  "description": "Snacks",
  "id": "usda-sr-legacy-168116",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 26.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Snacks, tortilla chips, unsalted, white corn",
  "nutritionPerBasis": {
    "calcium_mg": 174.0,
    "carbs_g": 65.3,
    "energy_kcal": 503.0,
    "fat_g": 23.4,
    "fibre_g": 5.3,
    "folate_ug": 10.0,
    "iron_mg": 2.32,
    "magnesium_mg": 146.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 200.0,
    "potassium_mg": 215.0,
    "protein_g": 7.79,
    "salt_g": 0.0375,
    "sat_fat_g": 2.46,
    "sodium_mg": 15.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.53,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168116",
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
