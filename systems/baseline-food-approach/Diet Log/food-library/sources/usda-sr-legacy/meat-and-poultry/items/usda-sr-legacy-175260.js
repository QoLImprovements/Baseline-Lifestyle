/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-175260",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Lamb, New Zealand, imported, rack - partly frenched, separable lean only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 670.0,
    "fat_g": 8.61,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.43,
    "magnesium_mg": 22.0,
    "omega3_g": 0.156,
    "phosphorus_mg": 185.0,
    "potassium_mg": 309.0,
    "protein_g": 20.6,
    "salt_g": 0.1675,
    "sat_fat_g": 2.78,
    "sodium_mg": 67.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175260",
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
