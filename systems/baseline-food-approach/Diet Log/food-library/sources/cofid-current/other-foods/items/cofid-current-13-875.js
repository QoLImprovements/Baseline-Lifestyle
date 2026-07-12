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
  "id": "cofid-current-13-875",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Coriander seeds",
  "nutritionPerBasis": {
    "calcium_mg": 709.0,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 17.8,
    "fibre_g": 41.9,
    "folate_ug": 0.0,
    "iron_mg": 16.32,
    "magnesium_mg": 330.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 409.0,
    "potassium_mg": 1270.0,
    "protein_g": 12.4,
    "salt_g": 0.0875,
    "sat_fat_g": 0.99,
    "sodium_mg": 35.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 21.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-875",
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
