/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe. Basic UK-type curry. Mixed vegetables with yogurt.",
  "id": "cofid-current-15-794",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, vegetable, with yogurt, UK type, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 4.7,
    "energy_kcal": 64.0,
    "fat_g": 4.0,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 0.84,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 51.0,
    "potassium_mg": 276.0,
    "protein_g": 2.2,
    "salt_g": 0.0375,
    "sat_fat_g": 0.39,
    "sodium_mg": 15.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 302.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-794",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
