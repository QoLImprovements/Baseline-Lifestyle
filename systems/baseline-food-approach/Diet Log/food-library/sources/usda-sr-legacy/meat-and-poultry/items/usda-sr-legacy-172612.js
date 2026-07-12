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
  "id": "usda-sr-legacy-172612",
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
  "name": "Lamb, New Zealand, imported, chump, boneless, separable lean only, cooked, fast roasted",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 0.0,
    "energy_kcal": 595.0,
    "fat_g": 5.27,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.73,
    "magnesium_mg": 25.0,
    "omega3_g": 0.148,
    "phosphorus_mg": 205.0,
    "potassium_mg": 339.0,
    "protein_g": 23.7,
    "salt_g": 0.1525,
    "sat_fat_g": 1.77,
    "sodium_mg": 61.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172612",
  "state": "Roasted",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "lamb-veal-and-game-products",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
