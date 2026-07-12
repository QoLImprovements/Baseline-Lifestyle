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
  "id": "cofid-current-17-806",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lemon curd, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 50.7,
    "energy_kcal": 350.0,
    "fat_g": 16.0,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 0.67,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 85.0,
    "protein_g": 4.2,
    "salt_g": 0.42,
    "sat_fat_g": 9.1,
    "sodium_mg": 168.0,
    "sugar_g": 50.7,
    "vitamin_a_ug": 210.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-806",
  "state": "Unspecified",
  "subcategory": "S",
  "tags": [
    "fruit",
    "s",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
