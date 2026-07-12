/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 9 products; frozen and chilled, block and ready rolled",
  "id": "cofid-current-11-851",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastry, shortcrust, retail, uncooked",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 39.4,
    "energy_kcal": 453.0,
    "fat_g": 31.4,
    "fibre_g": 3.4,
    "folate_ug": 6.0,
    "iron_mg": 0.99,
    "magnesium_mg": 10.0,
    "omega3_g": 1.04,
    "phosphorus_mg": 51.0,
    "potassium_mg": 97.0,
    "protein_g": 5.7,
    "salt_g": 0.56,
    "sat_fat_g": 11.68,
    "sodium_mg": 224.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 3.26,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-851",
  "state": "Cooked",
  "subcategory": "AO",
  "tags": [
    "ao",
    "cooked",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
