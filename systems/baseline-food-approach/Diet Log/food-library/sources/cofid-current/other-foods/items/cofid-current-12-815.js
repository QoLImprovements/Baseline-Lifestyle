/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Analytical and literature sources",
  "id": "cofid-current-12-815",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Eggs, quail, whole, raw",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 0.0,
    "energy_kcal": 151.0,
    "fat_g": 11.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 3.7,
    "magnesium_mg": 0.0,
    "omega3_g": 0.16,
    "phosphorus_mg": 230.0,
    "potassium_mg": 0.0,
    "protein_g": 12.9,
    "salt_g": 0.0,
    "sat_fat_g": 3.1,
    "sodium_mg": 0.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-815",
  "state": "Raw",
  "subcategory": "CA",
  "tags": [
    "ca",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
