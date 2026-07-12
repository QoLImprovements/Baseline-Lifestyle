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
  "id": "usda-sr-legacy-175201",
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
    },
    {
      "gramsPerUnit": 442.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    }
  ],
  "name": "Beans, pinto, mature seeds, canned, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 15.2,
    "energy_kcal": 345.0,
    "fat_g": 0.56,
    "fibre_g": 4.6,
    "folate_ug": 24.0,
    "iron_mg": 1.47,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 92.0,
    "potassium_mg": 276.0,
    "protein_g": 4.6,
    "salt_g": 0.67,
    "sat_fat_g": 0.123,
    "sodium_mg": 268.0,
    "sugar_g": 1.02,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175201",
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
