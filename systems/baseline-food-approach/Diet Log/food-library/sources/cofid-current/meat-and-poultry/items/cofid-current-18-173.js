/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples",
  "id": "cofid-current-18-173",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lamb, shoulder, half bladeside, pot-roasted, lean",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 234.0,
    "fat_g": 14.3,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.8,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 280.0,
    "protein_g": 26.2,
    "salt_g": 0.17,
    "sat_fat_g": 6.4,
    "sodium_mg": 68.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-173",
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
