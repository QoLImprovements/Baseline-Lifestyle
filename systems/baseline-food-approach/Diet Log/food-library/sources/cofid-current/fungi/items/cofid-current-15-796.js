/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "g",
  "description": "Recipe from dietary survey records",
  "id": "cofid-current-15-796",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flan, cheese and mushroom, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 215.0,
    "carbs_g": 16.0,
    "energy_kcal": 282.0,
    "fat_g": 19.9,
    "fibre_g": 1.8,
    "folate_ug": 16.0,
    "iron_mg": 0.85,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 195.0,
    "potassium_mg": 179.0,
    "protein_g": 10.8,
    "salt_g": 0.6425,
    "sat_fat_g": 8.94,
    "sodium_mg": 257.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 103.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.55,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-796",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "fungi",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
