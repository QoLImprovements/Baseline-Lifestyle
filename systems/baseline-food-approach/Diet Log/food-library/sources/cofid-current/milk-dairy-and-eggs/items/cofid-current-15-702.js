/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe from review of recipe collection",
  "id": "cofid-current-15-702",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Broccoli in cheese sauce, made with whole milk, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 168.0,
    "carbs_g": 5.8,
    "energy_kcal": 124.0,
    "fat_g": 8.2,
    "fibre_g": 2.5,
    "folate_ug": 34.0,
    "iron_mg": 0.74,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 151.0,
    "potassium_mg": 316.0,
    "protein_g": 7.3,
    "salt_g": 0.3225,
    "sat_fat_g": 5.0,
    "sodium_mg": 129.0,
    "sugar_g": 2.9,
    "vitamin_a_ug": 149.0,
    "vitamin_c_mg": 24.0,
    "vitamin_e_mg": 1.19,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-702",
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
