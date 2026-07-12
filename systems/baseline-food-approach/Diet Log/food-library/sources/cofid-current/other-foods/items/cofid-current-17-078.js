/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "4 brands",
  "id": "cofid-current-17-078",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Marmalade",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 69.5,
    "energy_kcal": 261.0,
    "fat_g": 0.0,
    "fibre_g": 0.5,
    "folate_ug": 5.0,
    "iron_mg": 0.2,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 6.0,
    "potassium_mg": 35.0,
    "protein_g": 0.1,
    "salt_g": 0.16,
    "sat_fat_g": 0.0,
    "sodium_mg": 64.0,
    "sugar_g": 69.5,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-078",
  "state": "Unspecified",
  "subcategory": "SC",
  "tags": [
    "other-foods",
    "sc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
