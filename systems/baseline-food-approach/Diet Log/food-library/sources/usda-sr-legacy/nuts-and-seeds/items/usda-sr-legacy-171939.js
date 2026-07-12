/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "can",
  "description": "Beverages",
  "id": "usda-sr-legacy-171939",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 391.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    },
    {
      "gramsPerUnit": 158.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beverages, Meal supplement drink, canned, peanut flavor",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 14.7,
    "energy_kcal": 421.0,
    "fat_g": 3.07,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.2,
    "magnesium_mg": 16.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 110.0,
    "potassium_mg": 160.0,
    "protein_g": 3.5,
    "salt_g": 0.135,
    "sat_fat_g": 0.571,
    "sodium_mg": 54.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171939",
  "state": "Canned",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "canned",
    "nuts-and-seeds"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
