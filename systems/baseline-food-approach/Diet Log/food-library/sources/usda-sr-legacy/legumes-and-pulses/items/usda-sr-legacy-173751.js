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
  "id": "usda-sr-legacy-173751",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 196.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, yellow, mature seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 166.0,
    "carbs_g": 60.7,
    "energy_kcal": 1440.0,
    "fat_g": 2.6,
    "fibre_g": 25.1,
    "folate_ug": 389.0,
    "iron_mg": 7.01,
    "magnesium_mg": 222.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 488.0,
    "potassium_mg": 1040.0,
    "protein_g": 22.0,
    "salt_g": 0.03,
    "sat_fat_g": 0.671,
    "sodium_mg": 12.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173751",
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
