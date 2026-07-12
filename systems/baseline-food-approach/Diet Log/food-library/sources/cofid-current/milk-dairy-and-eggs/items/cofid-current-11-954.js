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
  "id": "cofid-current-11-954",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Macaroni cheese, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 172.0,
    "carbs_g": 19.8,
    "energy_kcal": 183.0,
    "fat_g": 8.6,
    "fibre_g": 1.1,
    "folate_ug": 6.0,
    "iron_mg": 0.42,
    "magnesium_mg": 19.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 157.0,
    "potassium_mg": 140.0,
    "protein_g": 7.8,
    "salt_g": 0.3725,
    "sat_fat_g": 4.47,
    "sodium_mg": 149.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-954",
  "state": "Unspecified",
  "subcategory": "AD",
  "tags": [
    "ad",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
