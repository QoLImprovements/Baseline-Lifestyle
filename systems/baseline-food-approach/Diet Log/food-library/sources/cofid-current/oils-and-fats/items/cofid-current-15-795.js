/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Recipe. Middle-Eastern dish. Deep fried chick pea balls.",
  "id": "cofid-current-15-795",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Falafel, fried in rapeseed oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 85.0,
    "carbs_g": 15.9,
    "energy_kcal": 183.0,
    "fat_g": 11.2,
    "fibre_g": 0.0,
    "folate_ug": 33.0,
    "iron_mg": 2.89,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 377.0,
    "protein_g": 6.4,
    "salt_g": 0.1675,
    "sat_fat_g": 0.74,
    "sodium_mg": 67.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 2.84,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-795",
  "state": "Fried",
  "subcategory": "DR",
  "tags": [
    "dr",
    "fried",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
