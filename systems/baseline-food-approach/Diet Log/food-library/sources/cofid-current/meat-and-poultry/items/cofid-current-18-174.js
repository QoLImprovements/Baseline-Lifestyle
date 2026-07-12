/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 72% lean and 28% fat",
  "id": "cofid-current-18-174",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lamb, shoulder, half bladeside, pot-roasted, lean and fat",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 324.0,
    "fat_g": 25.6,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.6,
    "magnesium_mg": 21.0,
    "omega3_g": 0.43,
    "phosphorus_mg": 180.0,
    "potassium_mg": 280.0,
    "protein_g": 23.5,
    "salt_g": 0.1775,
    "sat_fat_g": 12.0,
    "sodium_mg": 71.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-174",
  "state": "Roasted",
  "subcategory": "MAE",
  "tags": [
    "mae",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
