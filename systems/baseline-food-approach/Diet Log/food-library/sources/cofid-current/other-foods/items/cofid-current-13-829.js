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
  "id": "cofid-current-13-829",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Garam masala",
  "nutritionPerBasis": {
    "calcium_mg": 760.0,
    "carbs_g": 45.2,
    "energy_kcal": 379.0,
    "fat_g": 15.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 32.6,
    "magnesium_mg": 330.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 390.0,
    "potassium_mg": 1450.0,
    "protein_g": 15.6,
    "salt_g": 0.2425,
    "sat_fat_g": 0.0,
    "sodium_mg": 97.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-829",
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
