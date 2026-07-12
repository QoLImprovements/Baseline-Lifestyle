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
  "id": "cofid-current-11-1051",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pudding, Christmas, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 54.6,
    "energy_kcal": 316.0,
    "fat_g": 9.8,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 1.74,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 88.0,
    "potassium_mg": 376.0,
    "protein_g": 5.0,
    "salt_g": 0.2975,
    "sat_fat_g": 0.0,
    "sodium_mg": 119.0,
    "sugar_g": 33.8,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.41
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1051",
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
