/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "lb",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-172534",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 453.0,
      "key": "lb",
      "kind": "unit",
      "label": "lb"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Veal, variety meats and by-products, liver, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 2.91,
    "energy_kcal": 586.0,
    "fat_g": 4.85,
    "fibre_g": 0.0,
    "folate_ug": 125.0,
    "iron_mg": 6.4,
    "magnesium_mg": 20.0,
    "omega3_g": 0.028,
    "phosphorus_mg": 379.0,
    "potassium_mg": 308.0,
    "protein_g": 19.9,
    "salt_g": 0.1925,
    "sat_fat_g": 1.56,
    "sodium_mg": 77.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 11700.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172534",
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
