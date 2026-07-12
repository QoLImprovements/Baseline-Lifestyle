/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Not filled. Recipe",
  "id": "cofid-current-11-956",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake, sponge, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 53.1,
    "energy_kcal": 463.0,
    "fat_g": 26.4,
    "fibre_g": 1.1,
    "folate_ug": 9.0,
    "iron_mg": 1.04,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 246.0,
    "potassium_mg": 105.0,
    "protein_g": 6.4,
    "salt_g": 1.075,
    "sat_fat_g": 15.69,
    "sodium_mg": 430.0,
    "sugar_g": 30.3,
    "vitamin_a_ug": 338.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.08,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-956",
  "state": "Unspecified",
  "subcategory": "AN",
  "tags": [
    "an",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
