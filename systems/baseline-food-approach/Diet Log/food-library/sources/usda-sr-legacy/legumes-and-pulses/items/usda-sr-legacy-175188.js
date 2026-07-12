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
  "id": "usda-sr-legacy-175188",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, black turtle, mature seeds, canned",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 16.6,
    "energy_kcal": 380.0,
    "fat_g": 0.29,
    "fibre_g": 6.9,
    "folate_ug": 61.0,
    "iron_mg": 1.9,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 108.0,
    "potassium_mg": 308.0,
    "protein_g": 6.03,
    "salt_g": 0.96,
    "sat_fat_g": 0.075,
    "sodium_mg": 384.0,
    "sugar_g": 0.23,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.7,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175188",
  "state": "Canned",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "canned",
    "legumes-and-legume-products",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
