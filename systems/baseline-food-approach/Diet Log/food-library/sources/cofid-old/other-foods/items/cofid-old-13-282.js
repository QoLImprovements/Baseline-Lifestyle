/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 8 brands, Assorted varieties",
  "id": "cofid-old-13-282",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Vegetables, mixed, canned, re-heated, drained",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 6.1,
    "energy_kcal": 38.0,
    "fat_g": 0.8,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.0,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 210.0,
    "protein_g": 1.9,
    "salt_g": 0.95,
    "sat_fat_g": 0.0,
    "sodium_mg": 380.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 167.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-282",
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
