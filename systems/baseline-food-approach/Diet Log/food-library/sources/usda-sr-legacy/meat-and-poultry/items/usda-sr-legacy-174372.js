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
  "id": "usda-sr-legacy-174372",
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
  "name": "Lamb, leg, whole (shank and sirloin), separable lean and fat, trimmed to 1/8\" fat, choice, raw",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.0,
    "energy_kcal": 874.0,
    "fat_g": 14.4,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 1.7,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 175.0,
    "potassium_mg": 258.0,
    "protein_g": 18.5,
    "salt_g": 0.1425,
    "sat_fat_g": 6.21,
    "sodium_mg": 57.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174372",
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
