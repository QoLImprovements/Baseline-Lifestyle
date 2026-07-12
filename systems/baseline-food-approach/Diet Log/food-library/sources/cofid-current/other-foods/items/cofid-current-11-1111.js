/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1111",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rum baba, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 33.1,
    "energy_kcal": 222.0,
    "fat_g": 7.7,
    "fibre_g": 0.0,
    "folate_ug": 46.0,
    "iron_mg": 0.81,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 69.0,
    "potassium_mg": 98.0,
    "protein_g": 3.7,
    "salt_g": 0.1475,
    "sat_fat_g": 1.94,
    "sodium_mg": 59.0,
    "sugar_g": 19.7,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1111",
  "state": "Unspecified",
  "subcategory": "AP",
  "tags": [
    "ap",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
