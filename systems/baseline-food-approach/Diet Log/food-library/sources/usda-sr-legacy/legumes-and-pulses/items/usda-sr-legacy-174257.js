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
  "id": "usda-sr-legacy-174257",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 202.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Mung beans, mature seeds, cooked, boiled, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 19.2,
    "energy_kcal": 441.0,
    "fat_g": 0.38,
    "fibre_g": 7.6,
    "folate_ug": 159.0,
    "iron_mg": 1.4,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 99.0,
    "potassium_mg": 266.0,
    "protein_g": 7.02,
    "salt_g": 0.005,
    "sat_fat_g": 0.116,
    "sodium_mg": 2.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174257",
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
