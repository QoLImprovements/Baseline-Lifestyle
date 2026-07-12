/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-15-665",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beanburger, aduki, fried in rapeseed oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 24.1,
    "energy_kcal": 190.0,
    "fat_g": 7.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.1,
    "magnesium_mg": 54.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 175.0,
    "potassium_mg": 438.0,
    "protein_g": 8.1,
    "salt_g": 0.52,
    "sat_fat_g": 0.0,
    "sodium_mg": 208.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 15.47
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-665",
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
