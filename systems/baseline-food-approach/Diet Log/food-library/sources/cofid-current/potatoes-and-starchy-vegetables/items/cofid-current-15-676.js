/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Punjabi dish. Recipe from dietary survey records",
  "id": "cofid-current-15-676",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, carrot, potato and pea, with butter, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 12.9,
    "energy_kcal": 116.0,
    "fat_g": 6.6,
    "fibre_g": 4.1,
    "folate_ug": 11.0,
    "iron_mg": 0.66,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 297.0,
    "protein_g": 2.2,
    "salt_g": 0.18,
    "sat_fat_g": 4.01,
    "sodium_mg": 72.0,
    "sugar_g": 6.8,
    "vitamin_a_ug": 1143.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-676",
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
