/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Assorted vegetables topped with cheese sauce and breadcrumbs. Recipe from dietary survey records",
  "id": "cofid-current-15-650",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Vegetable bake, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 13.7,
    "energy_kcal": 121.0,
    "fat_g": 5.9,
    "fibre_g": 1.2,
    "folate_ug": 9.0,
    "iron_mg": 0.41,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 92.0,
    "potassium_mg": 257.0,
    "protein_g": 4.3,
    "salt_g": 0.2675,
    "sat_fat_g": 2.65,
    "sodium_mg": 107.0,
    "sugar_g": 4.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-650",
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
