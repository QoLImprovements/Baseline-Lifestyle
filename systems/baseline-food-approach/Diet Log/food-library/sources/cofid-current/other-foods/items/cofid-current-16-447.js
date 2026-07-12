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
  "id": "cofid-current-16-447",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Kedgeree, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 9.1,
    "energy_kcal": 167.0,
    "fat_g": 7.7,
    "fibre_g": 0.2,
    "folate_ug": 14.0,
    "iron_mg": 0.62,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 181.0,
    "protein_g": 15.9,
    "salt_g": 0.8575,
    "sat_fat_g": 2.37,
    "sodium_mg": 343.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-447",
  "state": "Unspecified",
  "subcategory": "JR",
  "tags": [
    "jr",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
