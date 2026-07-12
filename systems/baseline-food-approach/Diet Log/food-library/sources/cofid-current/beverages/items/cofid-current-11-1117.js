/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1117",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread, soda, made with white flour, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 114.0,
    "carbs_g": 57.3,
    "energy_kcal": 261.0,
    "fat_g": 1.6,
    "fibre_g": 2.7,
    "folate_ug": 7.0,
    "iron_mg": 1.34,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 116.0,
    "potassium_mg": 282.0,
    "protein_g": 7.6,
    "salt_g": 0.375,
    "sat_fat_g": 0.73,
    "sodium_mg": 150.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1117",
  "state": "Unspecified",
  "subcategory": "AF",
  "tags": [
    "af",
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
