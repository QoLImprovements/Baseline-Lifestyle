/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-172615",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Lamb, New Zealand, imported, liver, raw",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 2.22,
    "energy_kcal": 136.0,
    "fat_g": 4.92,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 4.6,
    "magnesium_mg": 18.0,
    "omega3_g": 0.564,
    "phosphorus_mg": 381.0,
    "potassium_mg": 285.0,
    "protein_g": 20.7,
    "salt_g": 0.1475,
    "sat_fat_g": 1.51,
    "sodium_mg": 59.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 15400.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172615",
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
