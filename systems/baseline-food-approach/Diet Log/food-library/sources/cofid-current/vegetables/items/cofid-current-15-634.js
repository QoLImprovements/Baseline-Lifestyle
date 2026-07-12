/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "10 sub-samples, 2 from different establishments in each of 5 regions",
  "id": "cofid-current-15-634",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, Thai, stir-fry vegetable, takeaway and restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 3.3,
    "energy_kcal": 101.0,
    "fat_g": 8.2,
    "fibre_g": 3.1,
    "folate_ug": 3.0,
    "iron_mg": 1.66,
    "magnesium_mg": 21.0,
    "omega3_g": 0.3,
    "phosphorus_mg": 54.0,
    "potassium_mg": 207.0,
    "protein_g": 3.8,
    "salt_g": 1.425,
    "sat_fat_g": 3.97,
    "sodium_mg": 570.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 89.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 1.48,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-634",
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
