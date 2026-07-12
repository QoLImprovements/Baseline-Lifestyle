/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "can-6-8-fl-oz-200-ml",
  "description": "Beverages",
  "id": "usda-sr-legacy-168753",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 211.0,
      "key": "can-6-8-fl-oz-200-ml",
      "kind": "unit",
      "label": "can (6.8 fl oz, 200 ml)"
    },
    {
      "gramsPerUnit": 31.1,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Alcoholic beverage, tequila sunrise, canned",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 11.3,
    "energy_kcal": 460.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.02,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 10.0,
    "protein_g": 0.3,
    "salt_g": 0.1425,
    "sat_fat_g": 0.0,
    "sodium_mg": 57.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 19.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168753",
  "state": "Canned",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "canned"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
