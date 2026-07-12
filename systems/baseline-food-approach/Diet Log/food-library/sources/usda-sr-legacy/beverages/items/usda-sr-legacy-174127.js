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
  "id": "usda-sr-legacy-174127",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.4,
      "key": "tsp-dry",
      "kind": "unit",
      "label": "tsp dry"
    }
  ],
  "name": "Beverages, coffee and cocoa, instant, decaffeinated, with whitener and low calorie sweetener",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 71.4,
    "energy_kcal": 440.0,
    "fat_g": 13.2,
    "fibre_g": 4.8,
    "folate_ug": 5.0,
    "iron_mg": 3.06,
    "magnesium_mg": 122.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 451.0,
    "potassium_mg": 1860.0,
    "protein_g": 9.0,
    "salt_g": 1.25,
    "sat_fat_g": 11.4,
    "sodium_mg": 500.0,
    "sugar_g": 35.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174127",
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
