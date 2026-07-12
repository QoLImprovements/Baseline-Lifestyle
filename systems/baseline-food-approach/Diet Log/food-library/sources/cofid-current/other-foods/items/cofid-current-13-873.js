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
  "id": "cofid-current-13-873",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chilli powder",
  "nutritionPerBasis": {
    "calcium_mg": 330.0,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 14.3,
    "fibre_g": 34.8,
    "folate_ug": 28.0,
    "iron_mg": 17.3,
    "magnesium_mg": 149.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 300.0,
    "potassium_mg": 1950.0,
    "protein_g": 13.5,
    "salt_g": 10.0,
    "sat_fat_g": 2.46,
    "sodium_mg": 4000.0,
    "sugar_g": 7.2,
    "vitamin_a_ug": 2965.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 105.7
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-873",
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
