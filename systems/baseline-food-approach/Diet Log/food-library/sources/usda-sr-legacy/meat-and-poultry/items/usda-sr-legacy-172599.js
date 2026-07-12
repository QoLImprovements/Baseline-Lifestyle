/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "steak-yield-from-232-8-g-raw-meat",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-172599",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 179.0,
      "key": "steak-yield-from-232-8-g-raw-meat",
      "kind": "unit",
      "label": "steak ( yield from 232.8 g raw meat )"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "serving-3-oz",
      "kind": "unit",
      "label": "serving ( 3 oz )"
    }
  ],
  "name": "Game meat, bison, ribeye, separable lean only, 1\" steak, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 740.0,
    "fat_g": 5.67,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 2.88,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 238.0,
    "potassium_mg": 371.0,
    "protein_g": 29.4,
    "salt_g": 0.13,
    "sat_fat_g": 2.42,
    "sodium_mg": 52.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172599",
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
