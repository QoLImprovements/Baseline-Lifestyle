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
  "id": "cofid-current-15-208",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Nut croquettes, fried in sunflower oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 21.6,
    "energy_kcal": 351.0,
    "fat_g": 26.2,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 2.0,
    "magnesium_mg": 74.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 350.0,
    "protein_g": 9.3,
    "salt_g": 0.55,
    "sat_fat_g": 3.6,
    "sodium_mg": 220.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 7.83,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-208",
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
