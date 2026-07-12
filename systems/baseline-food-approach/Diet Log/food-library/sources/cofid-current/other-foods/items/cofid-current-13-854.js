/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Literature souces",
  "id": "cofid-current-13-854",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sage, dried, ground",
  "nutritionPerBasis": {
    "calcium_mg": 1650.0,
    "carbs_g": 42.7,
    "energy_kcal": 315.0,
    "fat_g": 12.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 28.1,
    "magnesium_mg": 430.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 91.0,
    "potassium_mg": 1070.0,
    "protein_g": 10.6,
    "salt_g": 0.0275,
    "sat_fat_g": 7.0,
    "sodium_mg": 11.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 590.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-854",
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
