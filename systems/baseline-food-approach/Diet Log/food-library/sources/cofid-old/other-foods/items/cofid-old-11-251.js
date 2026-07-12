/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Greek sweet, 10 assorted samples",
  "id": "cofid-old-11-251",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Halva",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 54.2,
    "energy_kcal": 615.0,
    "fat_g": 31.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 5.7,
    "magnesium_mg": 170.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 330.0,
    "potassium_mg": 190.0,
    "protein_g": 14.8,
    "salt_g": 0.475,
    "sat_fat_g": 0.0,
    "sodium_mg": 190.0,
    "sugar_g": 53.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-251",
  "state": "Unspecified",
  "subcategory": "AP",
  "tags": [
    "ap",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
