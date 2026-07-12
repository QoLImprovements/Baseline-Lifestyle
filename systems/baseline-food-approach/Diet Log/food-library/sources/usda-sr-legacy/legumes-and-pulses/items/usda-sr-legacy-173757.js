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
  "id": "usda-sr-legacy-173757",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 164.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Chickpeas (garbanzo beans, bengal gram), mature seeds, cooked, boiled, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 27.4,
    "energy_kcal": 686.0,
    "fat_g": 2.59,
    "fibre_g": 7.6,
    "folate_ug": 172.0,
    "iron_mg": 2.89,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 168.0,
    "potassium_mg": 291.0,
    "protein_g": 8.86,
    "salt_g": 0.0175,
    "sat_fat_g": 0.269,
    "sodium_mg": 7.0,
    "sugar_g": 4.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173757",
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
