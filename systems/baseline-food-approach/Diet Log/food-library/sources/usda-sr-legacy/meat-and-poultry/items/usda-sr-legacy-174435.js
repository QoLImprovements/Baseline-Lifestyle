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
  "id": "usda-sr-legacy-174435",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lamb, New Zealand, imported, subcutaneous fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 0.55,
    "energy_kcal": 703.0,
    "fat_g": 76.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.47,
    "magnesium_mg": 5.0,
    "omega3_g": 0.696,
    "phosphorus_mg": 45.0,
    "potassium_mg": 93.0,
    "protein_g": 3.87,
    "salt_g": 0.07,
    "sat_fat_g": 32.4,
    "sodium_mg": 28.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.18,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174435",
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
