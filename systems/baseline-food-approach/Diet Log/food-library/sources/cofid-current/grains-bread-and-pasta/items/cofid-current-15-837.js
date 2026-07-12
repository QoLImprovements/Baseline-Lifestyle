/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Recipe. Green peppers with rice, tomato and raisin stuffing. Recipe from review of recipe collection",
  "id": "cofid-current-15-837",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peppers, green, stuffed with rice, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 14.4,
    "energy_kcal": 77.0,
    "fat_g": 1.9,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 0.55,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 169.0,
    "protein_g": 1.7,
    "salt_g": 0.0175,
    "sat_fat_g": 0.19,
    "sodium_mg": 7.0,
    "sugar_g": 5.5,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 39.0,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-837",
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
