/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706666",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 531.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 531.0,
      "key": "1-kfc-bowl",
      "kind": "unit",
      "label": "1 KFC Bowl"
    }
  ],
  "name": "Chicken or turkey, potatoes, corn, and cheese, with gravy",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 13.3,
    "energy_kcal": 123.0,
    "fat_g": 6.11,
    "fibre_g": 1.1,
    "folate_ug": 13.0,
    "iron_mg": 0.43,
    "magnesium_mg": 17.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 99.0,
    "potassium_mg": 222.0,
    "protein_g": 4.51,
    "salt_g": 0.8825,
    "sat_fat_g": 1.46,
    "sodium_mg": 353.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706666",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
