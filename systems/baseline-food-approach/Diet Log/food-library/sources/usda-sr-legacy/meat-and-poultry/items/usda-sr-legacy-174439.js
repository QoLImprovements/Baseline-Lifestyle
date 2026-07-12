/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-174439",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Lamb, New Zealand, imported, kidney, cooked, soaked and fried",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.18,
    "energy_kcal": 468.0,
    "fat_g": 3.56,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 14.7,
    "magnesium_mg": 19.0,
    "omega3_g": 0.354,
    "phosphorus_mg": 312.0,
    "potassium_mg": 271.0,
    "protein_g": 19.8,
    "salt_g": 0.4975,
    "sat_fat_g": 0.92,
    "sodium_mg": 199.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 85.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174439",
  "state": "Fried",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "fried",
    "lamb-veal-and-game-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
