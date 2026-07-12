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
  "id": "usda-sr-legacy-173745",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 208.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, navy, mature seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 147.0,
    "carbs_g": 60.8,
    "energy_kcal": 337.0,
    "fat_g": 1.5,
    "fibre_g": 15.3,
    "folate_ug": 364.0,
    "iron_mg": 5.49,
    "magnesium_mg": 175.0,
    "omega3_g": 0.538,
    "phosphorus_mg": 407.0,
    "potassium_mg": 1180.0,
    "protein_g": 22.3,
    "salt_g": 0.0125,
    "sat_fat_g": 0.17,
    "sodium_mg": 5.0,
    "sugar_g": 3.88,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173745",
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
