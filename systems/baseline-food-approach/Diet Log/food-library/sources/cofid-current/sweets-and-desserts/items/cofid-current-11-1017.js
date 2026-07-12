/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1017",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastry, shortcrust, uncooked, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 48.8,
    "energy_kcal": 435.0,
    "fat_g": 25.5,
    "fibre_g": 2.4,
    "folate_ug": 10.0,
    "iron_mg": 1.18,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 76.0,
    "potassium_mg": 114.0,
    "protein_g": 5.7,
    "salt_g": 0.555,
    "sat_fat_g": 15.93,
    "sodium_mg": 222.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 319.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1017",
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
