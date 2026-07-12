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
  "id": "usda-fndds-2706922",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-hamburger",
      "kind": "unit",
      "label": "1 hamburger"
    }
  ],
  "name": "Hamburger (Burger King)",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 26.0,
    "energy_kcal": 254.0,
    "fat_g": 10.2,
    "fibre_g": 1.1,
    "folate_ug": 55.0,
    "iron_mg": 2.67,
    "magnesium_mg": 21.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 121.0,
    "potassium_mg": 199.0,
    "protein_g": 13.6,
    "salt_g": 1.0,
    "sat_fat_g": 3.72,
    "sodium_mg": 400.0,
    "sugar_g": 4.66,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706922",
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
