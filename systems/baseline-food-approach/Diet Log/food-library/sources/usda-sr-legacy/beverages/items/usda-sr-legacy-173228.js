/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "2-tsp",
  "description": "Beverages",
  "id": "usda-sr-legacy-173228",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.6,
      "key": "2-tsp",
      "kind": "unit",
      "label": "2 tsp"
    }
  ],
  "name": "Beverages, tea, instant, decaffeinated, lemon, diet",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 85.4,
    "energy_kcal": 1410.0,
    "fat_g": 0.6,
    "fibre_g": 0.0,
    "folate_ug": 35.0,
    "iron_mg": 8.87,
    "magnesium_mg": 125.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 2570.0,
    "protein_g": 3.3,
    "salt_g": 1.03,
    "sat_fat_g": 0.0,
    "sodium_mg": 412.0,
    "sugar_g": 1.88,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173228",
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
