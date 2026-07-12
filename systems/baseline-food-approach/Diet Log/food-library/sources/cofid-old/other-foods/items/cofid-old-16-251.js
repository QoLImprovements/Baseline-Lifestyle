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
  "id": "cofid-old-16-251",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Clams, canned in brine, drained",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 1.9,
    "energy_kcal": 77.0,
    "fat_g": 0.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 8.0,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 280.0,
    "potassium_mg": 630.0,
    "protein_g": 16.0,
    "salt_g": 3.0,
    "sat_fat_g": 0.2,
    "sodium_mg": 1200.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "16-251",
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
