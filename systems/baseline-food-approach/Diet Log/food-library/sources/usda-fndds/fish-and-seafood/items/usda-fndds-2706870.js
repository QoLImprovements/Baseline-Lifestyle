/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706870",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Octopus salad, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 5.56,
    "energy_kcal": 170.0,
    "fat_g": 12.0,
    "fibre_g": 1.0,
    "folate_ug": 18.0,
    "iron_mg": 3.3,
    "magnesium_mg": 24.0,
    "omega3_g": 0.099,
    "phosphorus_mg": 107.0,
    "potassium_mg": 297.0,
    "protein_g": 9.67,
    "salt_g": 0.3225,
    "sat_fat_g": 1.9,
    "sodium_mg": 129.0,
    "sugar_g": 2.13,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 8.9,
    "vitamin_e_mg": 3.26,
    "vitamin_k_ug": 6.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706870",
  "state": "Unspecified",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "fish-and-seafood",
    "seafood-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
