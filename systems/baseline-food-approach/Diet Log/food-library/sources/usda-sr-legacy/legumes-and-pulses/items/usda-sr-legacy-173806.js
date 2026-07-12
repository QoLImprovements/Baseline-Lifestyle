/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "oz",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-173806",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 146.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "peanut",
      "kind": "unit",
      "label": "peanut"
    }
  ],
  "name": "Peanuts, all types, dry-roasted, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 21.3,
    "energy_kcal": 2460.0,
    "fat_g": 49.7,
    "fibre_g": 8.4,
    "folate_ug": 97.0,
    "iron_mg": 1.58,
    "magnesium_mg": 178.0,
    "omega3_g": 0.025,
    "phosphorus_mg": 363.0,
    "potassium_mg": 634.0,
    "protein_g": 24.4,
    "salt_g": 0.015,
    "sat_fat_g": 7.72,
    "sodium_mg": 6.0,
    "sugar_g": 4.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.93,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173806",
  "state": "Roasted",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "legumes-and-pulses",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
