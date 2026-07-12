/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Peeled",
  "id": "cofid-current-13-351",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Spring onions, bulbs only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 8.5,
    "energy_kcal": 35.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 1.2,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 230.0,
    "protein_g": 0.9,
    "salt_g": 0.0325,
    "sat_fat_g": 0.0,
    "sodium_mg": 13.0,
    "sugar_g": 8.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 25.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-351",
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
