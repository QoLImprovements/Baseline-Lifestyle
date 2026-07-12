/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-slice-4-x-3-1-2-x-1-2-with-sauce",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706868",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 213.0,
      "key": "1-slice-4-x-3-1-2-x-1-2-with-sauce",
      "kind": "unit",
      "label": "1 slice (4\" x 3-1/2\" x 1/2\") with sauce"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fried fish with sauce, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 3.42,
    "energy_kcal": 155.0,
    "fat_g": 10.3,
    "fibre_g": 0.8,
    "folate_ug": 14.0,
    "iron_mg": 0.58,
    "magnesium_mg": 31.0,
    "omega3_g": 0.194,
    "phosphorus_mg": 145.0,
    "potassium_mg": 309.0,
    "protein_g": 11.8,
    "salt_g": 1.655,
    "sat_fat_g": 1.97,
    "sodium_mg": 662.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 2.81,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706868",
  "state": "Fried",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "fish-and-seafood",
    "fried",
    "seafood-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
