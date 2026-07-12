/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Recipe. Brown rice, vegetables, red kidney beans and cashew nuts. Recipe from Leeds Polytechnic",
  "id": "cofid-current-15-864",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Risotto, vegetable, brown rice",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 17.3,
    "energy_kcal": 136.0,
    "fat_g": 6.2,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 1.06,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 129.0,
    "potassium_mg": 274.0,
    "protein_g": 4.0,
    "salt_g": 0.185,
    "sat_fat_g": 0.72,
    "sodium_mg": 74.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 1.11,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-864",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
