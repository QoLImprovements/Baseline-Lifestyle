/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Recipe using apples only",
  "id": "cofid-current-11-1065",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pudding, Eve's pudding, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 31.4,
    "energy_kcal": 252.0,
    "fat_g": 13.4,
    "fibre_g": 1.4,
    "folate_ug": 5.0,
    "iron_mg": 0.57,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 127.0,
    "potassium_mg": 96.0,
    "protein_g": 3.3,
    "salt_g": 0.54,
    "sat_fat_g": 7.88,
    "sodium_mg": 216.0,
    "sugar_g": 20.0,
    "vitamin_a_ug": 170.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1065",
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
