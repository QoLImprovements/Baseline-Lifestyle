/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 4 brands; assorted flavours",
  "id": "cofid-current-17-371",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Stuffing mix, dried",
  "nutritionPerBasis": {
    "calcium_mg": 960.0,
    "carbs_g": 67.2,
    "energy_kcal": 338.0,
    "fat_g": 5.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 5.1,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 240.0,
    "protein_g": 9.9,
    "salt_g": 3.65,
    "sat_fat_g": 2.4,
    "sodium_mg": 1460.0,
    "sugar_g": 4.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-371",
  "state": "Dried",
  "subcategory": "AT",
  "tags": [
    "at",
    "dried",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
