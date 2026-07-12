/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-3-oz",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-172605",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "serving-3-oz",
      "kind": "unit",
      "label": "serving ( 3 oz )"
    },
    {
      "gramsPerUnit": 293.0,
      "key": "roast-3-to-5-lb-roast",
      "kind": "unit",
      "label": "roast (3 to 5 lb roast)"
    }
  ],
  "name": "Game meat, deer, shoulder clod, separable lean only, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.0,
    "energy_kcal": 797.0,
    "fat_g": 3.95,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 5.01,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 261.0,
    "potassium_mg": 313.0,
    "protein_g": 36.3,
    "salt_g": 0.13,
    "sat_fat_g": 2.24,
    "sodium_mg": 52.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172605",
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
