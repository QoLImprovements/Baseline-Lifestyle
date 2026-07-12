/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from raw sweetcorn (13-508)",
  "id": "cofid-current-13-609",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sweetcorn, dried",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 35.5,
    "energy_kcal": 251.0,
    "fat_g": 7.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.42,
    "magnesium_mg": 157.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 398.0,
    "potassium_mg": 1242.0,
    "protein_g": 13.4,
    "salt_g": 0.01,
    "sat_fat_g": 0.93,
    "sodium_mg": 4.0,
    "sugar_g": 9.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.57,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-609",
  "state": "Dried",
  "subcategory": "DI",
  "tags": [
    "di",
    "dried",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
