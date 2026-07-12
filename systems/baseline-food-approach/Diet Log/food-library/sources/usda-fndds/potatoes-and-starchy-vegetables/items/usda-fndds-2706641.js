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
  "id": "usda-fndds-2706641",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 189.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pork, potatoes, and vegetables including carrots, broccoli, and/or dark-green leafy; tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 11.2,
    "energy_kcal": 128.0,
    "fat_g": 7.06,
    "fibre_g": 1.7,
    "folate_ug": 12.0,
    "iron_mg": 0.64,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 65.0,
    "potassium_mg": 317.0,
    "protein_g": 5.03,
    "salt_g": 0.77,
    "sat_fat_g": 1.24,
    "sodium_mg": 308.0,
    "sugar_g": 1.78,
    "vitamin_a_ug": 80.0,
    "vitamin_c_mg": 12.3,
    "vitamin_e_mg": 1.57,
    "vitamin_k_ug": 17.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706641",
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
