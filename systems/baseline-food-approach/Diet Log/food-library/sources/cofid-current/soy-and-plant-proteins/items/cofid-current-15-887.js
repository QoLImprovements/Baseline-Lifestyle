/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soy & Plant Proteins",
  "defaultMeasure": "g",
  "description": "Recipe. Tofu, oat and vegetable. Recipe from Leeds Polytechnic",
  "id": "cofid-current-15-887",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tofu burger, baked",
  "nutritionPerBasis": {
    "calcium_mg": 330.0,
    "carbs_g": 13.2,
    "energy_kcal": 115.0,
    "fat_g": 4.0,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 1.64,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 124.0,
    "potassium_mg": 142.0,
    "protein_g": 7.3,
    "salt_g": 0.5275,
    "sat_fat_g": 0.51,
    "sodium_mg": 211.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 164.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-887",
  "state": "Baked",
  "subcategory": "DR",
  "tags": [
    "baked",
    "dr",
    "soy-and-plant-proteins"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
