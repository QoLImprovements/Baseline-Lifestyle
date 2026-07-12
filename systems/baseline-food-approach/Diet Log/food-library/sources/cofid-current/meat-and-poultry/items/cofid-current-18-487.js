/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "9 samples",
  "id": "cofid-current-18-487",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Veal, escalope, fried in corn oil",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.0,
    "energy_kcal": 196.0,
    "fat_g": 6.8,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 0.9,
    "magnesium_mg": 32.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 300.0,
    "potassium_mg": 460.0,
    "protein_g": 33.7,
    "salt_g": 0.215,
    "sat_fat_g": 1.76,
    "sodium_mg": 86.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-487",
  "state": "Fried",
  "subcategory": "MAI",
  "tags": [
    "fried",
    "mai",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
