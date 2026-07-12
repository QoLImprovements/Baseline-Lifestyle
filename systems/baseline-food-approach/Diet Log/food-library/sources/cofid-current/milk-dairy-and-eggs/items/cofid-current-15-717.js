/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-15-717",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cauliflower in white sauce, made with whole milk, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 6.2,
    "energy_kcal": 72.0,
    "fat_g": 4.2,
    "fibre_g": 1.4,
    "folate_ug": 34.0,
    "iron_mg": 0.36,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 204.0,
    "protein_g": 2.7,
    "salt_g": 0.0975,
    "sat_fat_g": 2.38,
    "sodium_mg": 39.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 20.0,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-717",
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
