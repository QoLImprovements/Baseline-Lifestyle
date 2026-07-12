/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706478",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 187.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Beef and potatoes with cheese sauce",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 11.1,
    "energy_kcal": 126.0,
    "fat_g": 5.6,
    "fibre_g": 0.9,
    "folate_ug": 9.0,
    "iron_mg": 0.61,
    "magnesium_mg": 18.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 112.0,
    "potassium_mg": 233.0,
    "protein_g": 8.15,
    "salt_g": 0.79,
    "sat_fat_g": 2.8,
    "sodium_mg": 316.0,
    "sugar_g": 0.48,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706478",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-mixed-dishes",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
