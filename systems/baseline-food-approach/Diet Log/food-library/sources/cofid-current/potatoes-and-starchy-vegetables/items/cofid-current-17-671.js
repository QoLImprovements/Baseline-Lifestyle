/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "11 samples, 8 products, assorted flavours, fried in high oleic sunflower oil, including Walkers and own brands",
  "id": "cofid-current-17-671",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato crisps, fried in sunflower oil",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 55.8,
    "energy_kcal": 493.0,
    "fat_g": 28.8,
    "fibre_g": 4.4,
    "folate_ug": 62.0,
    "iron_mg": 1.46,
    "magnesium_mg": 63.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 135.0,
    "potassium_mg": 1328.0,
    "protein_g": 6.2,
    "salt_g": 1.51,
    "sat_fat_g": 2.48,
    "sodium_mg": 604.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 17.0,
    "vitamin_e_mg": 9.05,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-671",
  "state": "Fried",
  "subcategory": "SNA",
  "tags": [
    "fried",
    "potatoes-and-starchy-vegetables",
    "sna"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
