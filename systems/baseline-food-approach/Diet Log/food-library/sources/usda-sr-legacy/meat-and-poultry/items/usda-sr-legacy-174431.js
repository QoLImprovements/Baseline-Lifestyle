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
  "id": "usda-sr-legacy-174431",
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
      "gramsPerUnit": 102.0,
      "key": "steak-yield-from-134-9-g-raw-meat",
      "kind": "unit",
      "label": "steak ( yield from 134.9 g raw meat )"
    }
  ],
  "name": "Game meat, deer, top round, separable lean only, 1\" steak, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 0.0,
    "energy_kcal": 635.0,
    "fat_g": 1.92,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 4.23,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 272.0,
    "potassium_mg": 377.0,
    "protein_g": 31.5,
    "salt_g": 0.1125,
    "sat_fat_g": 1.03,
    "sodium_mg": 45.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174431",
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
