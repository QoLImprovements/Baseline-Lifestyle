/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "35 samples of a mixture of chops and steaks",
  "id": "cofid-current-18-117",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lamb, chump chops, fried, lean",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 0.0,
    "energy_kcal": 213.0,
    "fat_g": 11.2,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 2.4,
    "magnesium_mg": 28.0,
    "omega3_g": 0.23,
    "phosphorus_mg": 260.0,
    "potassium_mg": 400.0,
    "protein_g": 28.1,
    "salt_g": 0.185,
    "sat_fat_g": 5.0,
    "sodium_mg": 74.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-117",
  "state": "Fried",
  "subcategory": "MAE",
  "tags": [
    "fried",
    "mae",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
