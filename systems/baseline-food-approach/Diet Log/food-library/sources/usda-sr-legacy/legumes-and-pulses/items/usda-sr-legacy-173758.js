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
  "id": "usda-sr-legacy-173758",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.5,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 167.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cowpeas, common (blackeyes, crowder, southern), mature seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 60.0,
    "energy_kcal": 1410.0,
    "fat_g": 1.26,
    "fibre_g": 10.6,
    "folate_ug": 633.0,
    "iron_mg": 8.27,
    "magnesium_mg": 184.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 424.0,
    "potassium_mg": 1110.0,
    "protein_g": 23.5,
    "salt_g": 0.04,
    "sat_fat_g": 0.331,
    "sodium_mg": 16.0,
    "sugar_g": 6.9,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 5.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173758",
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
