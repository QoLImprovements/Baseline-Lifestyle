/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Recipe, with topping",
  "id": "cofid-current-11-1041",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake, carrot, with topping, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 81.0,
    "carbs_g": 37.7,
    "energy_kcal": 346.0,
    "fat_g": 21.1,
    "fibre_g": 1.5,
    "folate_ug": 11.0,
    "iron_mg": 0.83,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 175.0,
    "potassium_mg": 152.0,
    "protein_g": 4.0,
    "salt_g": 0.535,
    "sat_fat_g": 5.19,
    "sodium_mg": 214.0,
    "sugar_g": 23.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.8
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1041",
  "state": "Unspecified",
  "subcategory": "AN",
  "tags": [
    "an",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
