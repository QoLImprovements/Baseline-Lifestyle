/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Recipe. Potato, turnip, carrot and pea. Recipe from dietary survey records",
  "id": "cofid-current-15-867",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rissoles, vegetable, fried in sunflower oil",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 13.2,
    "energy_kcal": 121.0,
    "fat_g": 7.2,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 0.35,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 277.0,
    "protein_g": 1.5,
    "salt_g": 0.0575,
    "sat_fat_g": 1.19,
    "sodium_mg": 23.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-867",
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
