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
  "id": "usda-sr-legacy-172632",
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
  "name": "Lamb, New Zealand, imported, hind-shank, separable lean and fat, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.04,
    "energy_kcal": 1030.0,
    "fat_g": 14.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.99,
    "magnesium_mg": 21.0,
    "omega3_g": 0.235,
    "phosphorus_mg": 170.0,
    "potassium_mg": 249.0,
    "protein_g": 29.6,
    "salt_g": 0.1725,
    "sat_fat_g": 5.4,
    "sodium_mg": 69.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172632",
  "state": "Cooked",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "cooked",
    "lamb-veal-and-game-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
