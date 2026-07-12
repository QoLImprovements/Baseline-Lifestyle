/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, in vinegar and brine",
  "id": "cofid-old-16-258",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mussels, canned and bottled, drained",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 3.1,
    "energy_kcal": 98.0,
    "fat_g": 2.1,
    "fibre_g": 0.0,
    "folate_ug": 37.0,
    "iron_mg": 13.0,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 180.0,
    "potassium_mg": 59.0,
    "protein_g": 16.9,
    "salt_g": 1.15,
    "sat_fat_g": 0.4,
    "sodium_mg": 460.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.05,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "16-258",
  "state": "Canned",
  "subcategory": "JM",
  "tags": [
    "canned",
    "jm",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
