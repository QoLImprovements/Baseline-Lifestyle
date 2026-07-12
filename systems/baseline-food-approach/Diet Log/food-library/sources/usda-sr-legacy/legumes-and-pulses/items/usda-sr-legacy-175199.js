/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "tbsp",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-175199",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 193.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, pinto, mature seeds, raw (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 113.0,
    "carbs_g": 62.6,
    "energy_kcal": 347.0,
    "fat_g": 1.23,
    "fibre_g": 15.5,
    "folate_ug": 525.0,
    "iron_mg": 5.07,
    "magnesium_mg": 176.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 411.0,
    "potassium_mg": 1390.0,
    "protein_g": 21.4,
    "salt_g": 0.03,
    "sat_fat_g": 0.235,
    "sodium_mg": 12.0,
    "sugar_g": 2.11,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.3,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 5.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175199",
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
