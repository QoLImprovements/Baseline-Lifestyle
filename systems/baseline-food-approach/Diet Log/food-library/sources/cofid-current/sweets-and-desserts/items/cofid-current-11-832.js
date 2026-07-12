/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 8 products, including angel cake, Madeira and lemon drizzle",
  "id": "cofid-current-11-832",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake, sponge, soft iced, retail",
  "nutritionPerBasis": {
    "calcium_mg": 81.0,
    "carbs_g": 55.0,
    "energy_kcal": 368.0,
    "fat_g": 15.8,
    "fibre_g": 1.3,
    "folate_ug": 0.0,
    "iron_mg": 0.9,
    "magnesium_mg": 14.0,
    "omega3_g": 0.5,
    "phosphorus_mg": 144.0,
    "potassium_mg": 197.0,
    "protein_g": 4.8,
    "salt_g": 0.6275,
    "sat_fat_g": 6.21,
    "sodium_mg": 251.0,
    "sugar_g": 39.0,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.8,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-832",
  "state": "Unspecified",
  "subcategory": "AN",
  "tags": [
    "an",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
