/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Analysis and calculation from 19-081",
  "id": "cofid-current-19-654",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sausages, pork, frozen, fried in vegetable oil",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 10.0,
    "energy_kcal": 316.0,
    "fat_g": 24.8,
    "fibre_g": 2.1,
    "folate_ug": 19.0,
    "iron_mg": 0.9,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 160.0,
    "protein_g": 13.8,
    "salt_g": 1.6,
    "sat_fat_g": 8.8,
    "sodium_mg": 640.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-654",
  "state": "Fried",
  "subcategory": "MI",
  "tags": [
    "fried",
    "meat-and-poultry",
    "mi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
