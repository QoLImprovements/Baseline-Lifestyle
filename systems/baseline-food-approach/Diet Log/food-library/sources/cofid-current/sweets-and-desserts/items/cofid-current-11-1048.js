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
  "id": "cofid-current-11-1048",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastry, choux, uncooked, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 20.2,
    "energy_kcal": 203.0,
    "fat_g": 11.8,
    "fibre_g": 1.0,
    "folate_ug": 16.0,
    "iron_mg": 0.92,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 74.0,
    "potassium_mg": 82.0,
    "protein_g": 5.5,
    "salt_g": 0.33,
    "sat_fat_g": 3.78,
    "sodium_mg": 132.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.19
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1048",
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
