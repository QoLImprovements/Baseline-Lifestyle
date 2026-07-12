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
  "id": "usda-sr-legacy-175190",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 183.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, great northern, mature seeds, raw (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 175.0,
    "carbs_g": 62.4,
    "energy_kcal": 339.0,
    "fat_g": 1.14,
    "fibre_g": 20.2,
    "folate_ug": 482.0,
    "iron_mg": 5.47,
    "magnesium_mg": 189.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 447.0,
    "potassium_mg": 1390.0,
    "protein_g": 21.9,
    "salt_g": 0.035,
    "sat_fat_g": 0.356,
    "sodium_mg": 14.0,
    "sugar_g": 2.26,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175190",
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
