/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-167988",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Candies, fudge, chocolate, with nuts, prepared-from-recipe",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 68.2,
    "energy_kcal": 460.0,
    "fat_g": 18.9,
    "fibre_g": 2.5,
    "folate_ug": 16.0,
    "iron_mg": 1.97,
    "magnesium_mg": 55.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 114.0,
    "potassium_mg": 183.0,
    "protein_g": 4.38,
    "salt_g": 0.0975,
    "sat_fat_g": 6.49,
    "sodium_mg": 39.0,
    "sugar_g": 63.4,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167988",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
