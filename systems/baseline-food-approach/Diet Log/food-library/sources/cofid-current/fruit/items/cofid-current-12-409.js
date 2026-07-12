/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "12 samples, 7 brands",
  "id": "cofid-current-12-409",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Trifle, fruit, retail",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 19.5,
    "energy_kcal": 164.0,
    "fat_g": 9.0,
    "fibre_g": 2.4,
    "folate_ug": 8.0,
    "iron_mg": 0.24,
    "magnesium_mg": 10.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 84.0,
    "potassium_mg": 137.0,
    "protein_g": 2.6,
    "salt_g": 0.1625,
    "sat_fat_g": 5.56,
    "sodium_mg": 65.0,
    "sugar_g": 15.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-409",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
