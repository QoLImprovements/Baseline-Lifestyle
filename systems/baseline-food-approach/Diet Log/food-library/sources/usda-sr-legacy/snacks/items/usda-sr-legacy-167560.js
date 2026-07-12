/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "bag-7-oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-167560",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "bag-7-oz",
      "kind": "unit",
      "label": "bag (7 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Snacks, tortilla chips, ranch-flavor",
  "nutritionPerBasis": {
    "calcium_mg": 134.0,
    "carbs_g": 62.7,
    "energy_kcal": 501.0,
    "fat_g": 24.6,
    "fibre_g": 4.0,
    "folate_ug": 0.0,
    "iron_mg": 1.38,
    "magnesium_mg": 87.0,
    "omega3_g": 0.235,
    "phosphorus_mg": 252.0,
    "potassium_mg": 259.0,
    "protein_g": 7.19,
    "salt_g": 1.2975,
    "sat_fat_g": 3.54,
    "sodium_mg": 519.0,
    "sugar_g": 3.03,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167560",
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
