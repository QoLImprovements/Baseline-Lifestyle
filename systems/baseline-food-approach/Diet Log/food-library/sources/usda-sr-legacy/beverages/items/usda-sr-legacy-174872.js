/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "serving-2-tsp",
  "description": "Beverages",
  "id": "usda-sr-legacy-174872",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 0.7,
      "key": "serving-2-tsp",
      "kind": "unit",
      "label": "serving 2 tsp"
    }
  ],
  "name": "Beverages, tea, instant, decaffeinated, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 58.7,
    "energy_kcal": 1320.0,
    "fat_g": 0.0,
    "fibre_g": 8.5,
    "folate_ug": 103.0,
    "iron_mg": 2.26,
    "magnesium_mg": 272.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 239.0,
    "potassium_mg": 6040.0,
    "protein_g": 20.2,
    "salt_g": 0.18,
    "sat_fat_g": 0.0,
    "sodium_mg": 72.0,
    "sugar_g": 5.53,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174872",
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
