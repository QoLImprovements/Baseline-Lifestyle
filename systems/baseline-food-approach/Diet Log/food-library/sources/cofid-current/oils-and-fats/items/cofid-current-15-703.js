/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Fried cabbage and potato. Recipe from Wiles et al, 1980",
  "id": "cofid-current-15-703",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bubble and squeak, fried in sunflower oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 10.2,
    "energy_kcal": 128.0,
    "fat_g": 9.1,
    "fibre_g": 1.9,
    "folate_ug": 29.0,
    "iron_mg": 0.39,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 283.0,
    "protein_g": 1.7,
    "salt_g": 0.0075,
    "sat_fat_g": 1.11,
    "sodium_mg": 3.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 27.0,
    "vitamin_e_mg": 4.56,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-703",
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
