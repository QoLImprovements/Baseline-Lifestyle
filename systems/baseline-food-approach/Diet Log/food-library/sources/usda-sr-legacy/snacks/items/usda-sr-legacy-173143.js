/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-173143",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Tortilla chips, yellow, plain, salted",
  "nutritionPerBasis": {
    "calcium_mg": 104.0,
    "carbs_g": 67.4,
    "energy_kcal": 2080.0,
    "fat_g": 22.3,
    "fibre_g": 4.7,
    "folate_ug": 22.0,
    "iron_mg": 1.32,
    "magnesium_mg": 84.0,
    "omega3_g": 0.318,
    "phosphorus_mg": 234.0,
    "potassium_mg": 206.0,
    "protein_g": 6.62,
    "salt_g": 0.775,
    "sat_fat_g": 2.78,
    "sodium_mg": 310.0,
    "sugar_g": 1.21,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.97,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173143",
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
