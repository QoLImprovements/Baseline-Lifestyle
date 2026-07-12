/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "5 samples, mixed lentils in spices",
  "id": "cofid-current-13-484",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Dahl, mixed, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 9.1,
    "energy_kcal": 60.0,
    "fat_g": 0.7,
    "fibre_g": 3.1,
    "folate_ug": 62.0,
    "iron_mg": 0.72,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 72.0,
    "potassium_mg": 234.0,
    "protein_g": 4.9,
    "salt_g": 0.5925,
    "sat_fat_g": 0.08,
    "sodium_mg": 237.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.36,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-484",
  "state": "Unspecified",
  "subcategory": "DB",
  "tags": [
    "db",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
