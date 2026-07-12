/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-15-791",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, vegetable, Islami, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 8.4,
    "energy_kcal": 81.0,
    "fat_g": 4.6,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 1.21,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 377.0,
    "protein_g": 2.2,
    "salt_g": 0.0675,
    "sat_fat_g": 0.31,
    "sodium_mg": 27.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 1.56,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-791",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
