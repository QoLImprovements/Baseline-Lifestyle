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
  "id": "usda-sr-legacy-174428",
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
      "gramsPerUnit": 176.0,
      "key": "steak-yield-from-233-1-g-raw-meat",
      "kind": "unit",
      "label": "steak ( yield from 233.1 g raw meat )"
    }
  ],
  "name": "Game meat, elk, round, separable lean only, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 156.0,
    "fat_g": 2.64,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 4.08,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 266.0,
    "potassium_mg": 392.0,
    "protein_g": 30.9,
    "salt_g": 0.1275,
    "sat_fat_g": 1.04,
    "sodium_mg": 51.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174428",
  "state": "Grilled",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "grilled",
    "lamb-veal-and-game-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
