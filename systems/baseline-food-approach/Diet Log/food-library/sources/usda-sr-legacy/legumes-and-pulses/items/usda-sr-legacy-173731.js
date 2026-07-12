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
  "id": "usda-sr-legacy-173731",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 253.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, baked, home prepared",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 21.6,
    "energy_kcal": 155.0,
    "fat_g": 5.15,
    "fibre_g": 5.5,
    "folate_ug": 48.0,
    "iron_mg": 1.99,
    "magnesium_mg": 43.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 358.0,
    "protein_g": 5.54,
    "salt_g": 1.055,
    "sat_fat_g": 1.95,
    "sodium_mg": 422.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173731",
  "state": "Baked",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "baked",
    "legumes-and-legume-products",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
