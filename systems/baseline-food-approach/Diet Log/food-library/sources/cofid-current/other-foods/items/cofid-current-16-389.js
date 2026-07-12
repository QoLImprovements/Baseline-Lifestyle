/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples, 11 products, warm-water prawns (Penaeus vannamei), frozen and chilled",
  "id": "cofid-current-16-389",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Prawns, king, purchased cooked",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 0.0,
    "energy_kcal": 68.0,
    "fat_g": 0.4,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.27,
    "magnesium_mg": 21.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 125.0,
    "potassium_mg": 65.0,
    "protein_g": 16.2,
    "salt_g": 1.6075,
    "sat_fat_g": 0.1,
    "sodium_mg": 643.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.64,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-389",
  "state": "Raw",
  "subcategory": "JK",
  "tags": [
    "jk",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
