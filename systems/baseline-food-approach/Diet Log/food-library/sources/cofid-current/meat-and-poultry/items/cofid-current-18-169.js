/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 66% lean and 34% fat",
  "id": "cofid-current-18-169",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lamb, rack of, roasted, lean and fat",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 363.0,
    "fat_g": 30.1,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.6,
    "magnesium_mg": 22.0,
    "omega3_g": 0.45,
    "phosphorus_mg": 190.0,
    "potassium_mg": 310.0,
    "protein_g": 23.0,
    "salt_g": 0.1875,
    "sat_fat_g": 14.8,
    "sodium_mg": 75.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-169",
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
