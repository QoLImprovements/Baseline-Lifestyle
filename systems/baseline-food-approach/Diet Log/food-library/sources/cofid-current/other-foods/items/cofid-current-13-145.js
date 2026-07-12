/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "8 cans",
  "id": "cofid-current-13-145",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ackee, canned, drained",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 0.8,
    "energy_kcal": 151.0,
    "fat_g": 15.2,
    "fibre_g": 0.0,
    "folate_ug": 41.0,
    "iron_mg": 0.7,
    "magnesium_mg": 40.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 47.0,
    "potassium_mg": 270.0,
    "protein_g": 2.9,
    "salt_g": 0.6,
    "sat_fat_g": 0.0,
    "sodium_mg": 240.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 30.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-145",
  "state": "Canned",
  "subcategory": "DG",
  "tags": [
    "canned",
    "dg",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
