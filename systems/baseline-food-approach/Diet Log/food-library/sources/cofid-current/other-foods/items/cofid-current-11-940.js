/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "8 samples, 8 products",
  "id": "cofid-current-11-940",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rusks",
  "nutritionPerBasis": {
    "calcium_mg": 336.0,
    "carbs_g": 73.0,
    "energy_kcal": 396.0,
    "fat_g": 10.7,
    "fibre_g": 2.4,
    "folate_ug": 22.0,
    "iron_mg": 6.46,
    "magnesium_mg": 29.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 108.0,
    "potassium_mg": 240.0,
    "protein_g": 6.5,
    "salt_g": 0.22,
    "sat_fat_g": 4.59,
    "sodium_mg": 88.0,
    "sugar_g": 23.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.38,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-940",
  "state": "Unspecified",
  "subcategory": "AK",
  "tags": [
    "ak",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
