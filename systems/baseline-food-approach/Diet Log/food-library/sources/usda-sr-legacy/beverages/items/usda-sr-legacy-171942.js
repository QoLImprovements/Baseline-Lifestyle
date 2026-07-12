/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "8-fl-oz-approximate-weight-1-serving",
  "description": "Beverages",
  "id": "usda-sr-legacy-171942",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "8-fl-oz-approximate-weight-1-serving",
      "kind": "unit",
      "label": "8 fl oz (approximate weight, 1 serving)"
    }
  ],
  "name": "Beverages, rice milk, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 9.17,
    "energy_kcal": 195.0,
    "fat_g": 0.97,
    "fibre_g": 0.3,
    "folate_ug": 2.0,
    "iron_mg": 0.2,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 56.0,
    "potassium_mg": 27.0,
    "protein_g": 0.28,
    "salt_g": 0.0975,
    "sat_fat_g": 0.0,
    "sodium_mg": 39.0,
    "sugar_g": 5.28,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171942",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
