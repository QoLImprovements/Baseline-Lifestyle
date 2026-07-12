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
  "id": "cofid-current-11-1140",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastry, flaky, uncooked, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 36.6,
    "energy_kcal": 409.0,
    "fat_g": 28.3,
    "fibre_g": 1.8,
    "folate_ug": 7.0,
    "iron_mg": 0.87,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 91.0,
    "protein_g": 4.3,
    "salt_g": 0.6175,
    "sat_fat_g": 17.76,
    "sodium_mg": 247.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 357.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1140",
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
