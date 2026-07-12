/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 18-156",
  "id": "cofid-current-18-157",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lamb, loin joint, roasted, lean and fat, weighed with bone",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 224.0,
    "fat_g": 16.6,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.3,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 240.0,
    "protein_g": 18.7,
    "salt_g": 0.19,
    "sat_fat_g": 7.8,
    "sodium_mg": 76.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-157",
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
