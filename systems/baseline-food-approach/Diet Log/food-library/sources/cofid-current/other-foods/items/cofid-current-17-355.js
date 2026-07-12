/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "6 samples of the same brand",
  "id": "cofid-current-17-355",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Baking powder",
  "nutritionPerBasis": {
    "calcium_mg": 1130.0,
    "carbs_g": 37.8,
    "energy_kcal": 163.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8430.0,
    "potassium_mg": 49.0,
    "protein_g": 5.2,
    "salt_g": 29.5,
    "sat_fat_g": 0.0,
    "sodium_mg": 11800.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-355",
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
