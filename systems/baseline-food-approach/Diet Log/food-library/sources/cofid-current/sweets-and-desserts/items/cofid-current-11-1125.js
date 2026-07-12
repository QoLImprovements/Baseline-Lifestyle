/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1125",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake, Swiss roll, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 58.4,
    "energy_kcal": 286.0,
    "fat_g": 4.2,
    "fibre_g": 0.8,
    "folate_ug": 12.0,
    "iron_mg": 1.23,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 109.0,
    "protein_g": 7.4,
    "salt_g": 0.1875,
    "sat_fat_g": 1.18,
    "sodium_mg": 75.0,
    "sugar_g": 42.2,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1125",
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
