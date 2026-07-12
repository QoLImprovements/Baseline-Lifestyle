/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Ends trimmed, scrubbed",
  "id": "cofid-current-13-448",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Carrots, young, raw",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 6.0,
    "energy_kcal": 30.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 28.0,
    "iron_mg": 0.4,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 240.0,
    "protein_g": 0.7,
    "salt_g": 0.1,
    "sat_fat_g": 0.1,
    "sodium_mg": 40.0,
    "sugar_g": 5.6,
    "vitamin_a_ug": 1301.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 9.2
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-448",
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
