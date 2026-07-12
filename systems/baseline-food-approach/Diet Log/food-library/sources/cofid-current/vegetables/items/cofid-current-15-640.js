/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from dietary survey records",
  "id": "cofid-current-15-640",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chilli, vegetable, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 8.6,
    "energy_kcal": 49.0,
    "fat_g": 0.8,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 0.82,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 53.0,
    "potassium_mg": 235.0,
    "protein_g": 2.5,
    "salt_g": 0.3175,
    "sat_fat_g": 0.14,
    "sodium_mg": 127.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 245.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-640",
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
