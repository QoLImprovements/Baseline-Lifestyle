/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "2 retail samples",
  "id": "cofid-current-13-876",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry powder",
  "nutritionPerBasis": {
    "calcium_mg": 640.0,
    "carbs_g": 26.1,
    "energy_kcal": 233.0,
    "fat_g": 10.8,
    "fibre_g": 0.0,
    "folate_ug": 56.0,
    "iron_mg": 58.3,
    "magnesium_mg": 280.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 270.0,
    "potassium_mg": 1830.0,
    "protein_g": 9.5,
    "salt_g": 1.125,
    "sat_fat_g": 0.0,
    "sodium_mg": 450.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-876",
  "state": "Unspecified",
  "subcategory": "H",
  "tags": [
    "h",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
