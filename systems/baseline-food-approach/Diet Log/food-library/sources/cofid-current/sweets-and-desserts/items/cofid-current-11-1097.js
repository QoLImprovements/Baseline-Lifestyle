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
  "id": "cofid-current-11-1097",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pudding, Queen of Puddings, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 34.2,
    "energy_kcal": 195.0,
    "fat_g": 7.6,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.69,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 120.0,
    "protein_g": 5.0,
    "salt_g": 0.3725,
    "sat_fat_g": 4.08,
    "sodium_mg": 149.0,
    "sugar_g": 27.5,
    "vitamin_a_ug": 88.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1097",
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
