/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 18-115",
  "id": "cofid-current-18-116",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lamb, chump chops, raw, lean and fat, weighed with bone",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 211.0,
    "fat_g": 16.4,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.3,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 160.0,
    "potassium_mg": 260.0,
    "protein_g": 15.9,
    "salt_g": 0.1225,
    "sat_fat_g": 7.6,
    "sodium_mg": 49.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-116",
  "state": "Raw",
  "subcategory": "MAE",
  "tags": [
    "mae",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
