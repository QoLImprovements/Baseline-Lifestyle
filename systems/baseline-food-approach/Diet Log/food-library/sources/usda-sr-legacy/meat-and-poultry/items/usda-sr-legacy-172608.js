/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-4-oz",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-172608",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "serving-4-oz",
      "kind": "unit",
      "label": "serving (4 oz)"
    }
  ],
  "name": "Lamb, Australian, ground, 85% lean / 15% fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.0,
    "energy_kcal": 1070.0,
    "fat_g": 20.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.41,
    "magnesium_mg": 0.0,
    "omega3_g": 0.322,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 17.1,
    "salt_g": 0.1925,
    "sat_fat_g": 9.93,
    "sodium_mg": 77.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172608",
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
