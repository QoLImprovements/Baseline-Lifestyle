/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Stalk and seeds removed",
  "id": "cofid-current-13-318",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peppers, capsicum, green, raw",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 2.6,
    "energy_kcal": 15.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 36.0,
    "iron_mg": 0.4,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 120.0,
    "protein_g": 0.8,
    "salt_g": 0.01,
    "sat_fat_g": 0.1,
    "sodium_mg": 4.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 120.0,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 6.4
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-318",
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
