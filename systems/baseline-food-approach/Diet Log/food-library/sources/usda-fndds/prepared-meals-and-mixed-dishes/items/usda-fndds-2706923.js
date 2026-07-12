/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "quantity-not-specified",
  "description": "Burgers",
  "id": "usda-fndds-2706923",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-hamburger",
      "kind": "unit",
      "label": "1 hamburger"
    }
  ],
  "name": "Whopper Jr (Burger King)",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 21.1,
    "energy_kcal": 216.0,
    "fat_g": 9.58,
    "fibre_g": 1.0,
    "folate_ug": 47.0,
    "iron_mg": 2.09,
    "magnesium_mg": 18.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 97.0,
    "potassium_mg": 198.0,
    "protein_g": 10.7,
    "salt_g": 0.7875,
    "sat_fat_g": 3.16,
    "sodium_mg": 315.0,
    "sugar_g": 4.28,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 2.9,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 9.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706923",
  "state": "Unspecified",
  "subcategory": "Burgers",
  "tags": [
    "burgers",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
