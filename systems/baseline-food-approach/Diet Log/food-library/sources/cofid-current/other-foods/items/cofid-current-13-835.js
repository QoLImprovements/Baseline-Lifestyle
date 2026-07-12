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
  "id": "cofid-current-13-835",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Marjoram, dried",
  "nutritionPerBasis": {
    "calcium_mg": 1990.0,
    "carbs_g": 42.5,
    "energy_kcal": 271.0,
    "fat_g": 7.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 82.7,
    "magnesium_mg": 350.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 310.0,
    "potassium_mg": 1520.0,
    "protein_g": 12.7,
    "salt_g": 0.1925,
    "sat_fat_g": 0.0,
    "sodium_mg": 77.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 805.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-835",
  "state": "Dried",
  "subcategory": "H",
  "tags": [
    "dried",
    "h",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
