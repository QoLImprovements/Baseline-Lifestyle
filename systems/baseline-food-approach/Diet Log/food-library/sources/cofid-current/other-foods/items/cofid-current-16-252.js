/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples from assorted outlets; fresh and frozen",
  "id": "cofid-current-16-252",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cockles, boiled",
  "nutritionPerBasis": {
    "calcium_mg": 91.0,
    "carbs_g": 0.0,
    "energy_kcal": 53.0,
    "fat_g": 0.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 28.0,
    "magnesium_mg": 46.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 110.0,
    "protein_g": 12.0,
    "salt_g": 1.225,
    "sat_fat_g": 0.2,
    "sodium_mg": 490.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-252",
  "state": "Boiled",
  "subcategory": "JM",
  "tags": [
    "boiled",
    "jm",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
