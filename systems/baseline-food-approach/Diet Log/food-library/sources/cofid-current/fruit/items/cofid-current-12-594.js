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
  "id": "cofid-current-12-594",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peach melba, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 18.1,
    "energy_kcal": 170.0,
    "fat_g": 10.5,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.28,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 146.0,
    "protein_g": 1.7,
    "salt_g": 0.1,
    "sat_fat_g": 6.65,
    "sodium_mg": 40.0,
    "sugar_g": 14.9,
    "vitamin_a_ug": 86.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-594",
  "state": "Unspecified",
  "subcategory": "BP",
  "tags": [
    "bp",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
