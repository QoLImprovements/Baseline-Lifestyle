/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "roast-yield-from-271-8-g-raw-meat-0-5-to-1-lb-roast",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-174430",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 202.0,
      "key": "roast-yield-from-271-8-g-raw-meat-0-5-to-1-lb-roast",
      "kind": "unit",
      "label": "roast ( yield from 271.8 g raw meat ) (0.5 to 1 lb roast)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "serving-3-oz",
      "kind": "unit",
      "label": "serving ( 3 oz )"
    }
  ],
  "name": "Game meat, deer, tenderloin, separable lean only, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 149.0,
    "fat_g": 2.35,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 4.25,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 299.0,
    "potassium_mg": 434.0,
    "protein_g": 29.9,
    "salt_g": 0.1425,
    "sat_fat_g": 1.14,
    "sodium_mg": 57.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174430",
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
