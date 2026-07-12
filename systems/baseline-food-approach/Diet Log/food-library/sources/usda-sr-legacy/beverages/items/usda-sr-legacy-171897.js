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
  "id": "usda-sr-legacy-171897",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.8,
      "key": "tsp-rounded",
      "kind": "unit",
      "label": "tsp, rounded"
    }
  ],
  "name": "Beverages, coffee, instant, with chicory",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 78.9,
    "energy_kcal": 355.0,
    "fat_g": 0.2,
    "fibre_g": 0.5,
    "folate_ug": 0.0,
    "iron_mg": 4.76,
    "magnesium_mg": 213.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 271.0,
    "potassium_mg": 3400.0,
    "protein_g": 9.3,
    "salt_g": 0.6925,
    "sat_fat_g": 0.071,
    "sodium_mg": 277.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171897",
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
