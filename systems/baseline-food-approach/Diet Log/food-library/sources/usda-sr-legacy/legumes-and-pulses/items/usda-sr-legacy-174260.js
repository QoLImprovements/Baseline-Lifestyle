/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup-in-shell-edible-yield",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-174260",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "cup-in-shell-edible-yield",
      "kind": "unit",
      "label": "cup in shell, edible yield"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-shelled",
      "kind": "unit",
      "label": "oz shelled"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "33-nuts",
      "kind": "unit",
      "label": "33 nuts"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "cup-shelled",
      "kind": "unit",
      "label": "cup, shelled"
    }
  ],
  "name": "Peanuts, all types, cooked, boiled, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 21.3,
    "energy_kcal": 318.0,
    "fat_g": 22.0,
    "fibre_g": 8.8,
    "folate_ug": 75.0,
    "iron_mg": 1.01,
    "magnesium_mg": 102.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 198.0,
    "potassium_mg": 180.0,
    "protein_g": 13.5,
    "salt_g": 1.8775,
    "sat_fat_g": 3.06,
    "sodium_mg": 751.0,
    "sugar_g": 2.47,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174260",
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
