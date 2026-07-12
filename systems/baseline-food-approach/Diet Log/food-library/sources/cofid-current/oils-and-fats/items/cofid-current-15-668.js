/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Recipe from review of recipe collection",
  "id": "cofid-current-15-668",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beanburger, soya, fried in rapeseed oil",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 14.5,
    "energy_kcal": 193.0,
    "fat_g": 10.7,
    "fibre_g": 0.0,
    "folate_ug": 39.0,
    "iron_mg": 2.55,
    "magnesium_mg": 55.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 209.0,
    "potassium_mg": 450.0,
    "protein_g": 10.5,
    "salt_g": 0.5025,
    "sat_fat_g": 1.18,
    "sodium_mg": 201.0,
    "sugar_g": 3.7,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 2.28,
    "vitamin_k_ug": 14.74
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-668",
  "state": "Fried",
  "subcategory": "DR",
  "tags": [
    "dr",
    "fried",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
