/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-172437",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Pigeon peas (red gram), mature seeds, cooked, boiled, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 23.2,
    "energy_kcal": 506.0,
    "fat_g": 0.38,
    "fibre_g": 6.7,
    "folate_ug": 111.0,
    "iron_mg": 1.11,
    "magnesium_mg": 46.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 119.0,
    "potassium_mg": 384.0,
    "protein_g": 6.76,
    "salt_g": 0.0125,
    "sat_fat_g": 0.083,
    "sodium_mg": 5.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172437",
  "state": "Boiled",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "boiled",
    "legumes-and-legume-products",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
