/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1028",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tart, bakewell, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 75.0,
    "carbs_g": 40.8,
    "energy_kcal": 454.0,
    "fat_g": 30.4,
    "fibre_g": 1.5,
    "folate_ug": 11.0,
    "iron_mg": 1.1,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 117.0,
    "potassium_mg": 168.0,
    "protein_g": 6.9,
    "salt_g": 0.53,
    "sat_fat_g": 8.8,
    "sodium_mg": 212.0,
    "sugar_g": 22.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1028",
  "state": "Unspecified",
  "subcategory": "AS",
  "tags": [
    "as",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
