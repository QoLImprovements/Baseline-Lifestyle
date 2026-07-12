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
  "id": "cofid-current-13-288",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mushrooms, Chinese, dried, raw",
  "nutritionPerBasis": {
    "calcium_mg": 76.0,
    "carbs_g": 59.9,
    "energy_kcal": 284.0,
    "fat_g": 1.8,
    "fibre_g": 0.0,
    "folate_ug": 30.0,
    "iron_mg": 11.7,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 290.0,
    "potassium_mg": 1480.0,
    "protein_g": 10.0,
    "salt_g": 0.095,
    "sat_fat_g": 0.0,
    "sodium_mg": 38.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-288",
  "state": "Dried",
  "subcategory": "DG",
  "tags": [
    "dg",
    "dried",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
