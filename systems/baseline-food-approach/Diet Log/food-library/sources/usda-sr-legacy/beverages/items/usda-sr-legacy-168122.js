/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "tsp-dry",
  "description": "Beverages",
  "id": "usda-sr-legacy-168122",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.7,
      "key": "tsp-dry",
      "kind": "unit",
      "label": "tsp dry"
    }
  ],
  "name": "Beverages, coffee, instant, with whitener, reduced calorie",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 59.9,
    "energy_kcal": 2130.0,
    "fat_g": 29.1,
    "fibre_g": 0.5,
    "folate_ug": 1.0,
    "iron_mg": 0.06,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 135.0,
    "potassium_mg": 909.0,
    "protein_g": 1.96,
    "salt_g": 0.0,
    "sat_fat_g": 25.1,
    "sodium_mg": 0.0,
    "sugar_g": 59.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168122",
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
