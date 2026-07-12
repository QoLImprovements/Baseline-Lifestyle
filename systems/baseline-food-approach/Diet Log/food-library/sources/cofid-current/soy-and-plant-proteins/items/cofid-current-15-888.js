/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soy & Plant Proteins",
  "defaultMeasure": "g",
  "description": "Recipe. Tofu, vegetable and mayonnaise paste. Recipe from Leeds Polytechnic",
  "id": "cofid-current-15-888",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tofu spread",
  "nutritionPerBasis": {
    "calcium_mg": 248.0,
    "carbs_g": 2.4,
    "energy_kcal": 208.0,
    "fat_g": 20.1,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 0.96,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 110.0,
    "protein_g": 4.4,
    "salt_g": 0.615,
    "sat_fat_g": 1.61,
    "sodium_mg": 246.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 5.86,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-888",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "soy-and-plant-proteins",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
