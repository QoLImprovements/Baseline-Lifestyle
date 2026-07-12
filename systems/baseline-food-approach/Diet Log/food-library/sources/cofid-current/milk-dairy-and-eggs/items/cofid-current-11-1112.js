/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1112",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Scones, cheese, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 249.0,
    "carbs_g": 45.3,
    "energy_kcal": 358.0,
    "fat_g": 16.4,
    "fibre_g": 2.1,
    "folate_ug": 11.0,
    "iron_mg": 1.07,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 480.0,
    "potassium_mg": 159.0,
    "protein_g": 10.1,
    "salt_g": 1.6475,
    "sat_fat_g": 7.18,
    "sodium_mg": 659.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1112",
  "state": "Unspecified",
  "subcategory": "AP",
  "tags": [
    "ap",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
