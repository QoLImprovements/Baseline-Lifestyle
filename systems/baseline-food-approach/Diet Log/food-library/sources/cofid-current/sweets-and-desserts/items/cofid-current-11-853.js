/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Calculated from uncooked, using weight loss of 17.2%",
  "id": "cofid-current-11-853",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastry, shortcrust, retail, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 47.5,
    "energy_kcal": 547.0,
    "fat_g": 37.9,
    "fibre_g": 4.1,
    "folate_ug": 8.0,
    "iron_mg": 1.2,
    "magnesium_mg": 12.0,
    "omega3_g": 1.25,
    "phosphorus_mg": 61.0,
    "potassium_mg": 118.0,
    "protein_g": 6.9,
    "salt_g": 0.6775,
    "sat_fat_g": 14.1,
    "sodium_mg": 271.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.94,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-853",
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
