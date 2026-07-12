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
  "id": "cofid-current-11-852",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastry, flaky/puff, retail, uncooked",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 33.7,
    "energy_kcal": 384.0,
    "fat_g": 26.2,
    "fibre_g": 2.8,
    "folate_ug": 0.0,
    "iron_mg": 1.14,
    "magnesium_mg": 10.0,
    "omega3_g": 0.37,
    "phosphorus_mg": 49.0,
    "potassium_mg": 89.0,
    "protein_g": 5.3,
    "salt_g": 0.8425,
    "sat_fat_g": 12.56,
    "sodium_mg": 337.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.99,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-852",
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
