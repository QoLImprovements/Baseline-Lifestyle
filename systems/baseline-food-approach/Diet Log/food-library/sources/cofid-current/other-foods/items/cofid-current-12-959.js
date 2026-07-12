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
  "id": "cofid-current-12-959",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Souffle, plain, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 91.0,
    "carbs_g": 10.5,
    "energy_kcal": 177.0,
    "fat_g": 11.9,
    "fibre_g": 0.4,
    "folate_ug": 13.0,
    "iron_mg": 0.89,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 132.0,
    "potassium_mg": 157.0,
    "protein_g": 7.7,
    "salt_g": 0.395,
    "sat_fat_g": 4.02,
    "sodium_mg": 158.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-959",
  "state": "Unspecified",
  "subcategory": "CD",
  "tags": [
    "cd",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
