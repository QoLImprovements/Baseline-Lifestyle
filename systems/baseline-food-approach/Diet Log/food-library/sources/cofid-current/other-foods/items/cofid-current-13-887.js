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
  "id": "cofid-current-13-887",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chives, fresh",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 1.9,
    "energy_kcal": 27.0,
    "fat_g": 0.7,
    "fibre_g": 2.5,
    "folate_ug": 105.0,
    "iron_mg": 1.6,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 58.0,
    "potassium_mg": 296.0,
    "protein_g": 3.3,
    "salt_g": 0.0075,
    "sat_fat_g": 0.15,
    "sodium_mg": 3.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 435.0,
    "vitamin_c_mg": 58.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-887",
  "state": "Unspecified",
  "subcategory": "H",
  "tags": [
    "h",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
