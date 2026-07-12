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
  "id": "usda-sr-legacy-174896",
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
    },
    {
      "gramsPerUnit": 2674.0,
      "key": "leg-trotter-off",
      "kind": "unit",
      "label": "leg trotter off"
    }
  ],
  "name": "Lamb, Australian, imported, fresh, leg, trotter off, bone-in, separable lean and fat, trimmed to 1/8\" fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 0.0,
    "energy_kcal": 175.0,
    "fat_g": 9.73,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.09,
    "magnesium_mg": 21.0,
    "omega3_g": 0.169,
    "phosphorus_mg": 156.0,
    "potassium_mg": 225.0,
    "protein_g": 22.0,
    "salt_g": 0.1875,
    "sat_fat_g": 4.46,
    "sodium_mg": 75.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174896",
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
