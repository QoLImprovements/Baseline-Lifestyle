/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-172645",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 1270.0,
      "key": "shank-whole",
      "kind": "unit",
      "label": "shank whole"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Veal, shank, separable lean only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 94.0,
    "fat_g": 1.64,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.19,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 212.0,
    "potassium_mg": 163.0,
    "protein_g": 19.8,
    "salt_g": 0.2725,
    "sat_fat_g": 0.639,
    "sodium_mg": 109.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172645",
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
