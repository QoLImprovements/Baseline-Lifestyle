/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-168068",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Restaurant, Latino, black bean soup",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 14.8,
    "energy_kcal": 103.0,
    "fat_g": 2.57,
    "fibre_g": 4.9,
    "folate_ug": 0.0,
    "iron_mg": 1.76,
    "magnesium_mg": 41.0,
    "omega3_g": 0.218,
    "phosphorus_mg": 109.0,
    "potassium_mg": 340.0,
    "protein_g": 5.1,
    "salt_g": 0.7775,
    "sat_fat_g": 0.535,
    "sodium_mg": 311.0,
    "sugar_g": 0.89,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168068",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "legumes-and-pulses",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
