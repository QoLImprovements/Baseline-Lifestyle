/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "9 samples, 5 brands; assorted flavours",
  "id": "cofid-current-17-075",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Jam, reduced sugar",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 31.9,
    "energy_kcal": 123.0,
    "fat_g": 0.1,
    "fibre_g": 1.7,
    "folate_ug": 0.0,
    "iron_mg": 0.36,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 123.0,
    "protein_g": 0.5,
    "salt_g": 0.05,
    "sat_fat_g": 0.0,
    "sodium_mg": 20.0,
    "sugar_g": 31.9,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 26.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-075",
  "state": "Unspecified",
  "subcategory": "SC",
  "tags": [
    "other-foods",
    "sc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
