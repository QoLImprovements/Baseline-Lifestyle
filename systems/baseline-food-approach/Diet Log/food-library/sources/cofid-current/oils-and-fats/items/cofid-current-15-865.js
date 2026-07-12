/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Recipe from dietary survey records",
  "id": "cofid-current-15-865",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rissoles, chick pea, fried in sunflower oil",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 16.0,
    "energy_kcal": 243.0,
    "fat_g": 16.7,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.7,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 127.0,
    "protein_g": 8.0,
    "salt_g": 0.0275,
    "sat_fat_g": 2.06,
    "sodium_mg": 11.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 8.17,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-865",
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
