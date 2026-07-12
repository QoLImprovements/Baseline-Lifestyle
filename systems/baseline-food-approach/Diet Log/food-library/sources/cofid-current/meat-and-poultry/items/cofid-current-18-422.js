/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "3 samples",
  "id": "cofid-current-18-422",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sweetbread, lamb, fried in corn oil",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 0.0,
    "energy_kcal": 217.0,
    "fat_g": 11.4,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.8,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 480.0,
    "potassium_mg": 400.0,
    "protein_g": 28.7,
    "salt_g": 0.13,
    "sat_fat_g": 0.0,
    "sodium_mg": 52.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 23.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-422",
  "state": "Fried",
  "subcategory": "MG",
  "tags": [
    "fried",
    "meat-and-poultry",
    "mg"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
