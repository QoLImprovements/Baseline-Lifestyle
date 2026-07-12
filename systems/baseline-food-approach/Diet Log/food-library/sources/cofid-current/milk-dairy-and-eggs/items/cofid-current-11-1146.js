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
  "id": "cofid-current-11-1146",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Yorkshire pudding, made with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 119.0,
    "carbs_g": 25.8,
    "energy_kcal": 211.0,
    "fat_g": 9.8,
    "fibre_g": 1.1,
    "folate_ug": 14.0,
    "iron_mg": 0.8,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 125.0,
    "potassium_mg": 182.0,
    "protein_g": 6.7,
    "salt_g": 0.13,
    "sat_fat_g": 2.78,
    "sodium_mg": 52.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 3.12,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1146",
  "state": "Unspecified",
  "subcategory": "AT",
  "tags": [
    "at",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
