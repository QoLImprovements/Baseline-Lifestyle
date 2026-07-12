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
  "id": "usda-fndds-2706931",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-hamburger",
      "kind": "unit",
      "label": "1 hamburger"
    }
  ],
  "name": "Whopper (Burger King)",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 17.3,
    "energy_kcal": 226.0,
    "fat_g": 12.4,
    "fibre_g": 1.5,
    "folate_ug": 64.0,
    "iron_mg": 2.99,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 188.0,
    "protein_g": 11.3,
    "salt_g": 0.855,
    "sat_fat_g": 3.97,
    "sodium_mg": 342.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 14.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706931",
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
