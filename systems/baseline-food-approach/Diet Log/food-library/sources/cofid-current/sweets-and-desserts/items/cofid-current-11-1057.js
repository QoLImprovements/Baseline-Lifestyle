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
  "id": "cofid-current-11-1057",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Crumble, with pie filling, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 37.2,
    "energy_kcal": 207.0,
    "fat_g": 6.6,
    "fibre_g": 0.7,
    "folate_ug": 2.0,
    "iron_mg": 1.05,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 91.0,
    "protein_g": 1.9,
    "salt_g": 0.24,
    "sat_fat_g": 0.0,
    "sodium_mg": 96.0,
    "sugar_g": 19.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.13
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1057",
  "state": "Unspecified",
  "subcategory": "AS",
  "tags": [
    "as",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
