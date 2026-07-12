/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe. Egg, potato and tomato",
  "id": "cofid-current-15-750",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, egg and potato, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 6.5,
    "energy_kcal": 138.0,
    "fat_g": 9.3,
    "fibre_g": 1.1,
    "folate_ug": 18.0,
    "iron_mg": 1.79,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 117.0,
    "potassium_mg": 280.0,
    "protein_g": 7.5,
    "salt_g": 0.2075,
    "sat_fat_g": 1.58,
    "sodium_mg": 83.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 81.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 1.91,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-750",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
