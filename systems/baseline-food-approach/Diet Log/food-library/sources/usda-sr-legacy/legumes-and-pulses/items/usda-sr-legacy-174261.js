/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup-chopped",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-174261",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-shelled-32-nuts",
      "kind": "unit",
      "label": "oz shelled (32 nuts)"
    }
  ],
  "name": "Peanuts, all types, oil-roasted, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 15.3,
    "energy_kcal": 2510.0,
    "fat_g": 52.5,
    "fibre_g": 9.4,
    "folate_ug": 120.0,
    "iron_mg": 1.52,
    "magnesium_mg": 176.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 397.0,
    "potassium_mg": 726.0,
    "protein_g": 28.0,
    "salt_g": 0.8,
    "sat_fat_g": 8.66,
    "sodium_mg": 320.0,
    "sugar_g": 4.18,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 6.94,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174261",
  "state": "Roasted",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "legumes-and-pulses",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
