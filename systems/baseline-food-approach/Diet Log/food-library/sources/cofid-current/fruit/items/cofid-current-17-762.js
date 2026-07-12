/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "10 jars, 4 brands",
  "id": "cofid-current-17-762",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lemon curd",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 58.4,
    "energy_kcal": 266.0,
    "fat_g": 4.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.5,
    "magnesium_mg": 2.0,
    "omega3_g": 0.15,
    "phosphorus_mg": 15.0,
    "potassium_mg": 11.0,
    "protein_g": 0.6,
    "salt_g": 0.1625,
    "sat_fat_g": 1.52,
    "sodium_mg": 65.0,
    "sugar_g": 52.5,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-762",
  "state": "Unspecified",
  "subcategory": "SC",
  "tags": [
    "fruit",
    "sc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
