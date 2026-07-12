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
  "id": "usda-sr-legacy-172614",
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
  "name": "Lamb, New Zealand, imported, liver, cooked, soaked and fried",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 1.48,
    "energy_kcal": 704.0,
    "fat_g": 6.56,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 5.4,
    "magnesium_mg": 21.0,
    "omega3_g": 0.722,
    "phosphorus_mg": 459.0,
    "potassium_mg": 287.0,
    "protein_g": 25.8,
    "salt_g": 0.1475,
    "sat_fat_g": 1.96,
    "sodium_mg": 59.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 19900.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.12,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172614",
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
