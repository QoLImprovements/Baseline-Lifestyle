/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-175286",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 453.6,
      "key": "lb",
      "kind": "unit",
      "label": "lb"
    }
  ],
  "name": "Veal, sirloin, separable lean and fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 636.0,
    "fat_g": 7.81,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 0.78,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 209.0,
    "potassium_mg": 329.0,
    "protein_g": 19.1,
    "salt_g": 0.19,
    "sat_fat_g": 3.35,
    "sodium_mg": 76.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 4.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175286",
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
