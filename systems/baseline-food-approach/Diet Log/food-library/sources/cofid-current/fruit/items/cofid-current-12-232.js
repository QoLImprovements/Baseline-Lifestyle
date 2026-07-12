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
  "id": "cofid-current-12-232",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fruit fool, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 20.2,
    "energy_kcal": 163.0,
    "fat_g": 9.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.4,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 160.0,
    "protein_g": 1.0,
    "salt_g": 0.0325,
    "sat_fat_g": 5.8,
    "sodium_mg": 13.0,
    "sugar_g": 16.1,
    "vitamin_a_ug": 150.0,
    "vitamin_c_mg": 17.0,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-232",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
