/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-169573",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.5,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 207.0,
      "key": "can-6-8-fl-oz-200-ml",
      "kind": "unit",
      "label": "can (6.8 fl oz, 200 ml)"
    }
  ],
  "name": "Alcoholic beverage, daiquiri, canned",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 15.7,
    "energy_kcal": 523.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.01,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 2.0,
    "potassium_mg": 11.0,
    "protein_g": 0.0,
    "salt_g": 0.1,
    "sat_fat_g": 0.0,
    "sodium_mg": 40.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169573",
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
