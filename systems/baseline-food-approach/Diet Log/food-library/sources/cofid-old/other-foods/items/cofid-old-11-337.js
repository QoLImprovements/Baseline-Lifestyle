/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Equal weights of the 2 varieties, Indian snack",
  "id": "cofid-old-11-337",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chevra and chana chur",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 32.8,
    "energy_kcal": 539.0,
    "fat_g": 39.2,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 4.3,
    "magnesium_mg": 93.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 250.0,
    "potassium_mg": 530.0,
    "protein_g": 15.8,
    "salt_g": 1.825,
    "sat_fat_g": 0.0,
    "sodium_mg": 730.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-337",
  "state": "Unspecified",
  "subcategory": "AT",
  "tags": [
    "at",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
