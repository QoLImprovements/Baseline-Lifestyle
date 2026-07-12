/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-17-378",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Yeast, bakers, compressed",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 1.1,
    "energy_kcal": 53.0,
    "fat_g": 0.4,
    "fibre_g": 0.0,
    "folate_ug": 1250.0,
    "iron_mg": 5.0,
    "magnesium_mg": 59.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 390.0,
    "potassium_mg": 610.0,
    "protein_g": 11.4,
    "salt_g": 0.04,
    "sat_fat_g": 0.0,
    "sodium_mg": 16.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-378",
  "state": "Unspecified",
  "subcategory": "WY",
  "tags": [
    "other-foods",
    "unspecified",
    "wy"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
