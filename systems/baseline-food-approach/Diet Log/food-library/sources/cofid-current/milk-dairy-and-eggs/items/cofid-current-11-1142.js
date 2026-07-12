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
  "id": "cofid-current-11-1142",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pancakes, sweet, made with whole milk, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 113.0,
    "carbs_g": 37.8,
    "energy_kcal": 254.0,
    "fat_g": 9.7,
    "fibre_g": 1.0,
    "folate_ug": 10.0,
    "iron_mg": 0.77,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 118.0,
    "potassium_mg": 171.0,
    "protein_g": 6.3,
    "salt_g": 0.1225,
    "sat_fat_g": 2.67,
    "sodium_mg": 49.0,
    "sugar_g": 16.9,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 3.17,
    "vitamin_k_ug": 0.96
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1142",
  "state": "Unspecified",
  "subcategory": "AS",
  "tags": [
    "as",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
