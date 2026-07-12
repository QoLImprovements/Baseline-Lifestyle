/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Recipe West Indian dish.",
  "id": "cofid-current-15-721",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cho cho fritters, fried in rapeseed oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 16.6,
    "energy_kcal": 192.0,
    "fat_g": 12.4,
    "fibre_g": 0.7,
    "folate_ug": 0.0,
    "iron_mg": 0.87,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 82.0,
    "potassium_mg": 176.0,
    "protein_g": 4.7,
    "salt_g": 0.1225,
    "sat_fat_g": 2.14,
    "sodium_mg": 49.0,
    "sugar_g": 2.9,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-721",
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
