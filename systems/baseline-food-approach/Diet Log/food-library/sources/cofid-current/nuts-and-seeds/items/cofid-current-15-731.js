/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-15-731",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, almond, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 91.0,
    "carbs_g": 3.3,
    "energy_kcal": 328.0,
    "fat_g": 33.4,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 3.91,
    "magnesium_mg": 72.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 145.0,
    "potassium_mg": 330.0,
    "protein_g": 5.7,
    "salt_g": 0.1275,
    "sat_fat_g": 14.15,
    "sodium_mg": 51.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 313.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 5.78,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-731",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
