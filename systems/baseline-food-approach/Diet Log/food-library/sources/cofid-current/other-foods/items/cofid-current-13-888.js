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
  "id": "cofid-current-13-888",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Coriander leaves, fresh",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 1.2,
    "energy_kcal": 18.0,
    "fat_g": 0.5,
    "fibre_g": 2.8,
    "folate_ug": 62.0,
    "iron_mg": 1.77,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 521.0,
    "protein_g": 2.1,
    "salt_g": 0.115,
    "sat_fat_g": 0.0,
    "sodium_mg": 46.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 675.0,
    "vitamin_c_mg": 27.0,
    "vitamin_e_mg": 2.5,
    "vitamin_k_ug": 310.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-888",
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
