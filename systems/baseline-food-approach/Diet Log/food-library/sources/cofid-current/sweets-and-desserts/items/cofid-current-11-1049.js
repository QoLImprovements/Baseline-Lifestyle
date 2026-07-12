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
  "id": "cofid-current-11-1049",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastry, choux, cooked, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 31.1,
    "energy_kcal": 313.0,
    "fat_g": 18.1,
    "fibre_g": 1.5,
    "folate_ug": 12.0,
    "iron_mg": 1.41,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 114.0,
    "potassium_mg": 126.0,
    "protein_g": 8.4,
    "salt_g": 0.51,
    "sat_fat_g": 5.82,
    "sodium_mg": 204.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.29
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1049",
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
