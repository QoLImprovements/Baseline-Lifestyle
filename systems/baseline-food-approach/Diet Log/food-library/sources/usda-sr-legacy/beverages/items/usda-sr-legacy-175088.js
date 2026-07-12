/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "tsp-rounded",
  "description": "Beverages",
  "id": "usda-sr-legacy-175088",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.4,
      "key": "tsp-rounded",
      "kind": "unit",
      "label": "tsp, rounded"
    },
    {
      "gramsPerUnit": 11.3,
      "key": "2-tbsp-rounded",
      "kind": "unit",
      "label": "2 tbsp, rounded"
    }
  ],
  "name": "Beverages, tea, instant, lemon, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 78.5,
    "energy_kcal": 345.0,
    "fat_g": 0.18,
    "fibre_g": 5.0,
    "folate_ug": 61.0,
    "iron_mg": 0.75,
    "magnesium_mg": 139.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 3450.0,
    "protein_g": 7.4,
    "salt_g": 0.1375,
    "sat_fat_g": 0.047,
    "sodium_mg": 55.0,
    "sugar_g": 4.52,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175088",
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
