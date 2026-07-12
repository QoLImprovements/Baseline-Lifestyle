/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-172517",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Lamb, New Zealand, imported, loin chop, separable lean and fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.22,
    "energy_kcal": 298.0,
    "fat_g": 26.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.24,
    "magnesium_mg": 18.0,
    "omega3_g": 0.314,
    "phosphorus_mg": 149.0,
    "potassium_mg": 262.0,
    "protein_g": 15.4,
    "salt_g": 0.1575,
    "sat_fat_g": 11.2,
    "sodium_mg": 63.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172517",
  "state": "Raw",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "lamb-veal-and-game-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
