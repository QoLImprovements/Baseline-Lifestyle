/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Recipe. Greek dish. Recipe from a personal collection",
  "id": "cofid-current-15-823",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Vine leaves, stuffed with rice",
  "nutritionPerBasis": {
    "calcium_mg": 126.0,
    "carbs_g": 23.8,
    "energy_kcal": 263.0,
    "fat_g": 17.8,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.07,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 177.0,
    "protein_g": 2.6,
    "salt_g": 1.3775,
    "sat_fat_g": 2.55,
    "sodium_mg": 551.0,
    "sugar_g": 10.5,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-823",
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
