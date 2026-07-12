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
  "id": "usda-fndds-2706726",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 305.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Gumbo with rice",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 6.55,
    "energy_kcal": 89.0,
    "fat_g": 3.43,
    "fibre_g": 0.9,
    "folate_ug": 19.0,
    "iron_mg": 0.64,
    "magnesium_mg": 15.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 82.0,
    "potassium_mg": 176.0,
    "protein_g": 8.16,
    "salt_g": 1.0,
    "sat_fat_g": 0.764,
    "sodium_mg": 400.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 4.5,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706726",
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
