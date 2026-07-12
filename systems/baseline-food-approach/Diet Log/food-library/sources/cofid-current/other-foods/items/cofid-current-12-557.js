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
  "id": "cofid-current-12-557",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Blancmange, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 114.0,
    "carbs_g": 18.1,
    "energy_kcal": 96.0,
    "fat_g": 1.6,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.04,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 90.0,
    "potassium_mg": 148.0,
    "protein_g": 3.3,
    "salt_g": 0.1025,
    "sat_fat_g": 1.02,
    "sodium_mg": 41.0,
    "sugar_g": 11.7,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-557",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
