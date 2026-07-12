/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 cans (Highland Pride)",
  "id": "cofid-old-13-169",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breadfruit, canned, drained",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 16.4,
    "energy_kcal": 66.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 32.0,
    "iron_mg": 0.3,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 130.0,
    "protein_g": 0.6,
    "salt_g": 0.625,
    "sat_fat_g": 0.0,
    "sodium_mg": 250.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-169",
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
