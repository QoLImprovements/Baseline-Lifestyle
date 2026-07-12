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
  "id": "usda-sr-legacy-168750",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 222.0,
      "key": "can-6-8-fl-oz-200-ml",
      "kind": "unit",
      "label": "can (6.8 fl oz, 200 ml)"
    },
    {
      "gramsPerUnit": 32.6,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Alcoholic beverage, pina colada, canned",
  "nutritionPerBasis": {
    "calcium_mg": 1.0,
    "carbs_g": 27.6,
    "energy_kcal": 992.0,
    "fat_g": 7.6,
    "fibre_g": 0.1,
    "folate_ug": 6.0,
    "iron_mg": 0.03,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 83.0,
    "protein_g": 0.6,
    "salt_g": 0.1775,
    "sat_fat_g": 6.57,
    "sodium_mg": 71.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168750",
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
