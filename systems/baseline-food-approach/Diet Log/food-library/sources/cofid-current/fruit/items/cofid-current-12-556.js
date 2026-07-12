/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-12-556",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Banana split, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 23.9,
    "energy_kcal": 205.0,
    "fat_g": 11.8,
    "fibre_g": 0.6,
    "folate_ug": 12.0,
    "iron_mg": 0.36,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 56.0,
    "potassium_mg": 224.0,
    "protein_g": 2.3,
    "salt_g": 0.095,
    "sat_fat_g": 6.91,
    "sodium_mg": 38.0,
    "sugar_g": 18.4,
    "vitamin_a_ug": 119.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.83,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-556",
  "state": "Unspecified",
  "subcategory": "BP",
  "tags": [
    "bp",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
