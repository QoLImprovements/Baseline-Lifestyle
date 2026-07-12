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
  "id": "cofid-current-11-1091",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk bread, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 131.0,
    "carbs_g": 50.8,
    "energy_kcal": 289.0,
    "fat_g": 7.0,
    "fibre_g": 2.0,
    "folate_ug": 55.0,
    "iron_mg": 1.39,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 131.0,
    "potassium_mg": 187.0,
    "protein_g": 8.8,
    "salt_g": 0.19,
    "sat_fat_g": 2.47,
    "sodium_mg": 76.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1091",
  "state": "Unspecified",
  "subcategory": "AF",
  "tags": [
    "af",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
