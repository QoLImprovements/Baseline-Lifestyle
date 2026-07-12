/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "chop",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-173835",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 450.0,
      "key": "chop",
      "kind": "unit",
      "label": "chop"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Veal, shoulder, blade chop, separable lean and fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 0.03,
    "energy_kcal": 148.0,
    "fat_g": 7.61,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.22,
    "magnesium_mg": 32.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 202.0,
    "potassium_mg": 198.0,
    "protein_g": 18.7,
    "salt_g": 0.2275,
    "sat_fat_g": 2.7,
    "sodium_mg": 91.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173835",
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
