/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "5 samples. Ends trimmed",
  "id": "cofid-current-13-252",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Gourd, karela, raw",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 0.8,
    "energy_kcal": 11.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 45.0,
    "iron_mg": 1.4,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 330.0,
    "protein_g": 1.6,
    "salt_g": 0.0025,
    "sat_fat_g": 0.0,
    "sodium_mg": 1.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 185.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-252",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
