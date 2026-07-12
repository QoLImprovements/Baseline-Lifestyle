/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "33 samples",
  "id": "cofid-current-18-141",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lamb, loin chops, grilled, lean",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 0.0,
    "energy_kcal": 213.0,
    "fat_g": 10.7,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 2.1,
    "magnesium_mg": 28.0,
    "omega3_g": 0.21,
    "phosphorus_mg": 240.0,
    "potassium_mg": 400.0,
    "protein_g": 29.2,
    "salt_g": 0.2,
    "sat_fat_g": 4.9,
    "sodium_mg": 80.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.28
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-141",
  "state": "Grilled",
  "subcategory": "MAE",
  "tags": [
    "grilled",
    "mae",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
