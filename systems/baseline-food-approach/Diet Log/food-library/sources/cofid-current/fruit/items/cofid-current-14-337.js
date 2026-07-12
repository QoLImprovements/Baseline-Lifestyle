/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-14-337",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lemon peel",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 0.3,
    "fibre_g": 10.6,
    "folate_ug": 11.0,
    "iron_mg": 0.8,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 160.0,
    "protein_g": 1.5,
    "salt_g": 0.015,
    "sat_fat_g": 0.1,
    "sodium_mg": 6.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 130.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-337",
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
