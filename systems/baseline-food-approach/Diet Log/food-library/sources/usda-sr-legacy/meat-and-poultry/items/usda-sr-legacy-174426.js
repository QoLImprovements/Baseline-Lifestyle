/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "patty-yield-from-104-1-g-raw-meat",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-174426",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "patty-yield-from-104-1-g-raw-meat",
      "kind": "unit",
      "label": "patty ( yield from 104.1 g raw meat )"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "serving-3-oz",
      "kind": "unit",
      "label": "serving ( 3 oz )"
    }
  ],
  "name": "Game meat, elk, ground, cooked, pan-broiled",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 193.0,
    "fat_g": 8.74,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 3.34,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 221.0,
    "potassium_mg": 354.0,
    "protein_g": 26.6,
    "salt_g": 0.2125,
    "sat_fat_g": 4.0,
    "sodium_mg": 85.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174426",
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
