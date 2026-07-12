/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "3 samples and literature sources",
  "id": "cofid-current-13-832",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ginger, ground",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 60.0,
    "energy_kcal": 284.0,
    "fat_g": 3.3,
    "fibre_g": 14.1,
    "folate_ug": 0.0,
    "iron_mg": 46.8,
    "magnesium_mg": 130.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 910.0,
    "protein_g": 7.4,
    "salt_g": 0.085,
    "sat_fat_g": 1.57,
    "sodium_mg": 34.0,
    "sugar_g": 19.8,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-832",
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
