/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1055",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Crumble, apple, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 35.0,
    "energy_kcal": 201.0,
    "fat_g": 6.4,
    "fibre_g": 0.8,
    "folate_ug": 2.0,
    "iron_mg": 0.44,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 91.0,
    "protein_g": 1.7,
    "salt_g": 0.16,
    "sat_fat_g": 2.09,
    "sodium_mg": 64.0,
    "sugar_g": 23.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.2
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1055",
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
