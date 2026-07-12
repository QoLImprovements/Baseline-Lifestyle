/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Literature sources;",
  "id": "cofid-current-14-296",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Melon, watermelon, flesh only",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 7.1,
    "energy_kcal": 31.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.3,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 100.0,
    "protein_g": 0.5,
    "salt_g": 0.005,
    "sat_fat_g": 0.1,
    "sodium_mg": 2.0,
    "sugar_g": 7.1,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.3
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-296",
  "state": "Unspecified",
  "subcategory": "FA",
  "tags": [
    "fa",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
