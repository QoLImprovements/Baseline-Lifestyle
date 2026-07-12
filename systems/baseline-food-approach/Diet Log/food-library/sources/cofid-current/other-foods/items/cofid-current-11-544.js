/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "6 samples, 4 brands",
  "id": "cofid-current-11-544",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Scotch pancakes, retail",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 43.0,
    "energy_kcal": 270.0,
    "fat_g": 9.6,
    "fibre_g": 1.9,
    "folate_ug": 6.0,
    "iron_mg": 1.0,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 240.0,
    "potassium_mg": 233.0,
    "protein_g": 5.6,
    "salt_g": 1.045,
    "sat_fat_g": 0.74,
    "sodium_mg": 418.0,
    "sugar_g": 21.5,
    "vitamin_a_ug": 102.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.35,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-544",
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
