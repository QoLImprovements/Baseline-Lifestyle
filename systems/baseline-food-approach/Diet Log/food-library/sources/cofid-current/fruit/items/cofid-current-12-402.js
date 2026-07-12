/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "8 samples, assorted flavours, fresh",
  "id": "cofid-current-12-402",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mousse, fruit",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 18.0,
    "energy_kcal": 143.0,
    "fat_g": 6.4,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.0,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 96.0,
    "potassium_mg": 150.0,
    "protein_g": 4.5,
    "salt_g": 0.155,
    "sat_fat_g": 4.11,
    "sodium_mg": 62.0,
    "sugar_g": 18.0,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-402",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
