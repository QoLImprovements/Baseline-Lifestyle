/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Recipe. Vegetable and lentil base with potato topping. Recipe from review of recipe collection",
  "id": "cofid-current-15-883",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Shepherd's pie, vegetable",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 16.1,
    "energy_kcal": 114.0,
    "fat_g": 3.9,
    "fibre_g": 0.0,
    "folate_ug": 24.0,
    "iron_mg": 1.63,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 76.0,
    "potassium_mg": 375.0,
    "protein_g": 4.5,
    "salt_g": 0.0125,
    "sat_fat_g": 0.3,
    "sodium_mg": 5.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-883",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
