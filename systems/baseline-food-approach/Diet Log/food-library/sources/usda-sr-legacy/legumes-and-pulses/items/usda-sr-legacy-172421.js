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
  "id": "usda-sr-legacy-172421",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 12.3,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Lentils, mature seeds, cooked, boiled, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 20.1,
    "energy_kcal": 487.0,
    "fat_g": 0.38,
    "fibre_g": 7.9,
    "folate_ug": 181.0,
    "iron_mg": 3.33,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 180.0,
    "potassium_mg": 369.0,
    "protein_g": 9.02,
    "salt_g": 0.005,
    "sat_fat_g": 0.053,
    "sodium_mg": 2.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172421",
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
