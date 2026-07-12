/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 62% lean and 36% fat",
  "id": "cofid-current-18-114",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lamb, breast, roasted, lean and fat",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.0,
    "energy_kcal": 359.0,
    "fat_g": 29.9,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.4,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 180.0,
    "potassium_mg": 300.0,
    "protein_g": 22.4,
    "salt_g": 0.2125,
    "sat_fat_g": 14.3,
    "sodium_mg": 85.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-114",
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
