/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from literature sources",
  "id": "cofid-current-15-693",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, potato, with vegetable oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 16.6,
    "energy_kcal": 161.0,
    "fat_g": 10.0,
    "fibre_g": 2.1,
    "folate_ug": 7.0,
    "iron_mg": 1.09,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 467.0,
    "protein_g": 2.2,
    "salt_g": 0.01,
    "sat_fat_g": 0.69,
    "sodium_mg": 4.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 2.2,
    "vitamin_k_ug": 11.71
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-693",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
