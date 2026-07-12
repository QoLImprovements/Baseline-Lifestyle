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
  "id": "usda-sr-legacy-174270",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 186.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soybeans, mature seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 277.0,
    "carbs_g": 30.2,
    "energy_kcal": 446.0,
    "fat_g": 19.9,
    "fibre_g": 9.3,
    "folate_ug": 375.0,
    "iron_mg": 15.7,
    "magnesium_mg": 280.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 704.0,
    "potassium_mg": 1800.0,
    "protein_g": 36.5,
    "salt_g": 0.005,
    "sat_fat_g": 2.88,
    "sodium_mg": 2.0,
    "sugar_g": 7.33,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 47.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174270",
  "state": "Raw",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "legumes-and-pulses",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
