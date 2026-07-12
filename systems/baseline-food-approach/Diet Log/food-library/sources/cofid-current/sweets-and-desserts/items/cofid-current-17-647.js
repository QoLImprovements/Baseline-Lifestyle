/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "9 samples, 8 products, including Starburst, Chewits and Blackjacks",
  "id": "cofid-current-17-647",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sweets, chew sweets",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 85.1,
    "energy_kcal": 377.0,
    "fat_g": 6.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.1,
    "magnesium_mg": 2.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 4.0,
    "potassium_mg": 10.0,
    "protein_g": 0.9,
    "salt_g": 0.075,
    "sat_fat_g": 3.57,
    "sodium_mg": 30.0,
    "sugar_g": 54.5,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.2,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-647",
  "state": "Unspecified",
  "subcategory": "SEC",
  "tags": [
    "sec",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
