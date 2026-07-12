/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe; Equal quantities of Marjoram, Parsley, Sage and Thyme",
  "id": "cofid-current-13-884",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mixed herbs, dried",
  "nutritionPerBasis": {
    "calcium_mg": 1653.0,
    "carbs_g": 36.3,
    "energy_kcal": 261.0,
    "fat_g": 8.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 68.97,
    "magnesium_mg": 280.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 235.0,
    "potassium_mg": 1873.0,
    "protein_g": 12.1,
    "salt_g": 0.2025,
    "sat_fat_g": 0.0,
    "sodium_mg": 81.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1350.0,
    "vitamin_c_mg": 43.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-884",
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
