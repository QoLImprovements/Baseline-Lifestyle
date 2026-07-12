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
  "id": "cofid-current-19-627",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Shish kebabs, with onions and peppers, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 4.6,
    "energy_kcal": 206.0,
    "fat_g": 15.2,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 1.57,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 134.0,
    "potassium_mg": 330.0,
    "protein_g": 12.8,
    "salt_g": 0.105,
    "sat_fat_g": 5.6,
    "sodium_mg": 42.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 30.0,
    "vitamin_e_mg": 1.29,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-627",
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
