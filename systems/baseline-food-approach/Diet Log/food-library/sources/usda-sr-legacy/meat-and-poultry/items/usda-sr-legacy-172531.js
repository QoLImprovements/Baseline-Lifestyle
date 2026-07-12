/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-172531",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Lamb, variety meats and by-products, liver, raw",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 1.78,
    "energy_kcal": 582.0,
    "fat_g": 5.02,
    "fibre_g": 0.0,
    "folate_ug": 230.0,
    "iron_mg": 7.37,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 364.0,
    "potassium_mg": 313.0,
    "protein_g": 20.4,
    "salt_g": 0.175,
    "sat_fat_g": 1.94,
    "sodium_mg": 70.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7390.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172531",
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
