/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "roast",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-172652",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 146.0,
      "key": "roast",
      "kind": "unit",
      "label": "roast"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Lamb, Australian, imported, fresh, tenderloin, boneless, separable lean only, trimmed to 1/8\" fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 0.0,
    "energy_kcal": 570.0,
    "fat_g": 4.73,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.27,
    "magnesium_mg": 26.0,
    "omega3_g": 0.138,
    "phosphorus_mg": 210.0,
    "potassium_mg": 311.0,
    "protein_g": 23.4,
    "salt_g": 0.1825,
    "sat_fat_g": 1.86,
    "sodium_mg": 73.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172652",
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
