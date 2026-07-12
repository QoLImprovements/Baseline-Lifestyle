/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "bar-2-8-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-169579",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "bar-2-8-oz",
      "kind": "unit",
      "label": "bar 2.8 oz"
    }
  ],
  "name": "Candies, HERSHEY'S POT OF GOLD Almond Bar",
  "nutritionPerBasis": {
    "calcium_mg": 192.0,
    "carbs_g": 44.9,
    "energy_kcal": 2410.0,
    "fat_g": 38.5,
    "fibre_g": 3.8,
    "folate_ug": 0.0,
    "iron_mg": 1.85,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 12.8,
    "salt_g": 0.16,
    "sat_fat_g": 16.7,
    "sodium_mg": 64.0,
    "sugar_g": 38.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169579",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "nuts-and-seeds",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
