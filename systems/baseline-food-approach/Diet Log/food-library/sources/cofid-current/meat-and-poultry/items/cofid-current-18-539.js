/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 86% lean and 14% fat",
  "id": "cofid-current-18-539",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork, loin steaks, fried in rapeseed oil, lean and fat",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.0,
    "energy_kcal": 235.0,
    "fat_g": 12.0,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.59,
    "magnesium_mg": 34.0,
    "omega3_g": 0.27,
    "phosphorus_mg": 274.0,
    "potassium_mg": 527.0,
    "protein_g": 31.7,
    "salt_g": 0.165,
    "sat_fat_g": 3.94,
    "sodium_mg": 66.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-539",
  "state": "Fried",
  "subcategory": "MAG",
  "tags": [
    "fried",
    "mag",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
