/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "With marzipan and royal icing. Recipe",
  "id": "cofid-current-11-991",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake, fruit, rich, iced, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 67.0,
    "energy_kcal": 355.0,
    "fat_g": 9.6,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.56,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 73.0,
    "potassium_mg": 351.0,
    "protein_g": 3.7,
    "salt_g": 0.245,
    "sat_fat_g": 4.53,
    "sodium_mg": 98.0,
    "sugar_g": 58.9,
    "vitamin_a_ug": 94.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.28,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-991",
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
