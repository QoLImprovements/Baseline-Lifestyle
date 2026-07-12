/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Recipe, apple, plum, gooseberry, rhubarb, homemade",
  "id": "cofid-current-11-1056",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Crumble, fruit, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 34.5,
    "energy_kcal": 195.0,
    "fat_g": 6.4,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.54,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 169.0,
    "protein_g": 2.0,
    "salt_g": 0.1625,
    "sat_fat_g": 2.1,
    "sodium_mg": 65.0,
    "sugar_g": 21.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.37
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1056",
  "state": "Unspecified",
  "subcategory": "AS",
  "tags": [
    "as",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
