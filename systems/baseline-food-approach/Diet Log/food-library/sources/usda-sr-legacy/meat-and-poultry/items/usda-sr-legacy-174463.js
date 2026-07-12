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
  "id": "usda-sr-legacy-174463",
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
    }
  ],
  "name": "Lamb, New Zealand, imported, loin saddle, separable lean and fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.2,
    "energy_kcal": 273.0,
    "fat_g": 22.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.29,
    "magnesium_mg": 19.0,
    "omega3_g": 0.274,
    "phosphorus_mg": 156.0,
    "potassium_mg": 290.0,
    "protein_g": 16.6,
    "salt_g": 0.1575,
    "sat_fat_g": 9.64,
    "sodium_mg": 63.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174463",
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
