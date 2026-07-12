/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from raw (13-499)",
  "id": "cofid-current-13-590",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Onions, dried, raw",
  "nutritionPerBasis": {
    "calcium_mg": 263.0,
    "carbs_g": 70.2,
    "energy_kcal": 309.0,
    "fat_g": 1.2,
    "fibre_g": 19.3,
    "folate_ug": 0.0,
    "iron_mg": 2.63,
    "magnesium_mg": 69.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 201.0,
    "potassium_mg": 1209.0,
    "protein_g": 8.8,
    "salt_g": 0.25,
    "sat_fat_g": 0.0,
    "sodium_mg": 100.0,
    "sugar_g": 54.4,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 33.0,
    "vitamin_e_mg": 2.54,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-590",
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
