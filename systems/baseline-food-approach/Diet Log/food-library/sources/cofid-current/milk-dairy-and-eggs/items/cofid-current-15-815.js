/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe, proportions derived from recipe review",
  "id": "cofid-current-15-815",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Leeks in cheese sauce, made with whole milk, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 4.5,
    "energy_kcal": 87.0,
    "fat_g": 6.0,
    "fibre_g": 1.2,
    "folate_ug": 27.0,
    "iron_mg": 0.48,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 91.0,
    "potassium_mg": 144.0,
    "protein_g": 4.0,
    "salt_g": 0.225,
    "sat_fat_g": 3.59,
    "sodium_mg": 90.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 79.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-815",
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
