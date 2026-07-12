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
  "id": "usda-sr-legacy-172642",
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
  "name": "Lamb, New Zealand, imported, tunnel-boned leg, chump off, shank off, separable lean and fat, cooked, slow roasted",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 0.03,
    "energy_kcal": 870.0,
    "fat_g": 12.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.64,
    "magnesium_mg": 24.0,
    "omega3_g": 0.224,
    "phosphorus_mg": 201.0,
    "potassium_mg": 349.0,
    "protein_g": 23.4,
    "salt_g": 0.1525,
    "sat_fat_g": 4.79,
    "sodium_mg": 61.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172642",
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
