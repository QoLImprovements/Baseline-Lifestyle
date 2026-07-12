/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-174434",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lamb, New Zealand, imported, Intermuscular fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 1.26,
    "energy_kcal": 2680.0,
    "fat_g": 68.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.72,
    "magnesium_mg": 6.0,
    "omega3_g": 0.696,
    "phosphorus_mg": 61.0,
    "potassium_mg": 119.0,
    "protein_g": 4.63,
    "salt_g": 0.085,
    "sat_fat_g": 30.7,
    "sodium_mg": 34.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174434",
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
