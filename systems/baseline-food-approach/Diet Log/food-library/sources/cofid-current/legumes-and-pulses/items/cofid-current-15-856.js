/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe. West Indian dish. Recipe from review of recipe collection",
  "id": "cofid-current-15-856",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice and black-eye beans, brown rice",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 31.6,
    "energy_kcal": 164.0,
    "fat_g": 2.4,
    "fibre_g": 0.0,
    "folate_ug": 54.0,
    "iron_mg": 1.53,
    "magnesium_mg": 57.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 161.0,
    "potassium_mg": 260.0,
    "protein_g": 5.9,
    "salt_g": 0.0375,
    "sat_fat_g": 0.96,
    "sodium_mg": 15.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-856",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
