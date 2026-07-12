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
  "id": "cofid-current-14-893",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Marzipan, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 114.0,
    "carbs_g": 50.1,
    "energy_kcal": 460.0,
    "fat_g": 25.7,
    "fibre_g": 0.0,
    "folate_ug": 25.0,
    "iron_mg": 1.63,
    "magnesium_mg": 123.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 260.0,
    "potassium_mg": 368.0,
    "protein_g": 10.4,
    "salt_g": 0.055,
    "sat_fat_g": 2.17,
    "sodium_mg": 22.0,
    "sugar_g": 48.7,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 10.83,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-893",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
