/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "9 samples, 6 brands, plain",
  "id": "cofid-current-12-335",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Creme fraiche, full fat",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 2.4,
    "energy_kcal": 378.0,
    "fat_g": 40.0,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.11,
    "magnesium_mg": 6.0,
    "omega3_g": 0.29,
    "phosphorus_mg": 58.0,
    "potassium_mg": 81.0,
    "protein_g": 2.2,
    "salt_g": 0.055,
    "sat_fat_g": 27.1,
    "sodium_mg": 22.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 412.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-335",
  "state": "Unspecified",
  "subcategory": "BJC",
  "tags": [
    "bjc",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
