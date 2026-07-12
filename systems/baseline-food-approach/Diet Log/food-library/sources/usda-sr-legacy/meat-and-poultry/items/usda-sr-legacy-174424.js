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
  "id": "usda-sr-legacy-174424",
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
      "gramsPerUnit": 774.0,
      "key": "roast-yield-from-1247-g-raw-meat-3-to-5-lb-roast",
      "kind": "unit",
      "label": "roast ( yield from 1247 g raw meat ) ( 3 to 5 lb roast)"
    }
  ],
  "name": "Game meat, bison, chuck, shoulder clod, separable lean only, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 809.0,
    "fat_g": 5.43,
    "fibre_g": 0.0,
    "folate_ug": 21.0,
    "iron_mg": 4.86,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 239.0,
    "potassium_mg": 316.0,
    "protein_g": 33.8,
    "salt_g": 0.1425,
    "sat_fat_g": 2.32,
    "sodium_mg": 57.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174424",
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
