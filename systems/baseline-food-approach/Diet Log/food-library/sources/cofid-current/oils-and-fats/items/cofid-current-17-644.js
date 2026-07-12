/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "7 samples, 6 products, assorted flavours, fried in high oleic sunflower oil, including Doritos and own brands",
  "id": "cofid-current-17-644",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tortilla chips fried in sunflower oil",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 60.8,
    "energy_kcal": 504.0,
    "fat_g": 27.4,
    "fibre_g": 5.9,
    "folate_ug": 10.0,
    "iron_mg": 1.5,
    "magnesium_mg": 78.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 234.0,
    "potassium_mg": 285.0,
    "protein_g": 7.2,
    "salt_g": 1.59,
    "sat_fat_g": 2.89,
    "sodium_mg": 636.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 7.11,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-644",
  "state": "Fried",
  "subcategory": "SN",
  "tags": [
    "fried",
    "oils-and-fats",
    "sn"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
