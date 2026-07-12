/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1084",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Hot cross buns, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 111.0,
    "carbs_g": 58.3,
    "energy_kcal": 312.0,
    "fat_g": 5.8,
    "fibre_g": 0.0,
    "folate_ug": 28.0,
    "iron_mg": 1.41,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 224.0,
    "protein_g": 7.3,
    "salt_g": 0.1925,
    "sat_fat_g": 1.95,
    "sodium_mg": 77.0,
    "sugar_g": 23.4,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.14,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1084",
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
