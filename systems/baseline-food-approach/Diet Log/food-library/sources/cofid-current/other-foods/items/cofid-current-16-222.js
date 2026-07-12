/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from raw, steaks",
  "id": "cofid-current-16-222",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Swordfish, flesh only, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 139.0,
    "fat_g": 5.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.6,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 340.0,
    "potassium_mg": 450.0,
    "protein_g": 22.9,
    "salt_g": 0.425,
    "sat_fat_g": 1.2,
    "sodium_mg": 170.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-222",
  "state": "Grilled",
  "subcategory": "JC",
  "tags": [
    "grilled",
    "jc",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
