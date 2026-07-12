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
  "id": "cofid-current-11-1096",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Noodles, egg, fried with spring onions, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 30.5,
    "energy_kcal": 244.0,
    "fat_g": 12.2,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.06,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 77.0,
    "potassium_mg": 79.0,
    "protein_g": 5.0,
    "salt_g": 0.3,
    "sat_fat_g": 0.88,
    "sodium_mg": 120.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 2.82,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1096",
  "state": "Fried",
  "subcategory": "AD",
  "tags": [
    "ad",
    "fried",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
