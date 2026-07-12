/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "can",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-174296",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 444.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    },
    {
      "gramsPerUnit": 242.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Refried beans, canned, vegetarian",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 13.5,
    "energy_kcal": 83.0,
    "fat_g": 0.87,
    "fibre_g": 4.7,
    "folate_ug": 0.0,
    "iron_mg": 1.7,
    "magnesium_mg": 38.0,
    "omega3_g": 0.176,
    "phosphorus_mg": 114.0,
    "potassium_mg": 344.0,
    "protein_g": 5.28,
    "salt_g": 1.075,
    "sat_fat_g": 0.142,
    "sodium_mg": 430.0,
    "sugar_g": 0.59,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174296",
  "state": "Fried",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "fried",
    "legumes-and-legume-products",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
