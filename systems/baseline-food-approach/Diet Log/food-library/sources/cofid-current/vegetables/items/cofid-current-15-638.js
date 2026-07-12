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
  "id": "cofid-current-15-638",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Casserole, vegetable, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 10.6,
    "energy_kcal": 52.0,
    "fat_g": 0.4,
    "fibre_g": 2.4,
    "folate_ug": 33.0,
    "iron_mg": 0.58,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 311.0,
    "protein_g": 2.1,
    "salt_g": 0.09,
    "sat_fat_g": 0.07,
    "sodium_mg": 36.0,
    "sugar_g": 5.1,
    "vitamin_a_ug": 225.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-638",
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
