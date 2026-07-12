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
  "id": "cofid-current-19-478",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chilli con carne, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 4.4,
    "energy_kcal": 120.0,
    "fat_g": 7.5,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.11,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 90.0,
    "potassium_mg": 263.0,
    "protein_g": 9.2,
    "salt_g": 0.2525,
    "sat_fat_g": 2.9,
    "sodium_mg": 101.0,
    "sugar_g": 2.9,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 1.15,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-478",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "mr",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
