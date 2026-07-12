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
  "id": "usda-fndds-2706599",
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
  "name": "Beef, potatoes, and vegetables including carrots, broccoli, and/or dark-green leafy; tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 11.1,
    "energy_kcal": 126.0,
    "fat_g": 6.96,
    "fibre_g": 1.7,
    "folate_ug": 13.0,
    "iron_mg": 0.82,
    "magnesium_mg": 17.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 56.0,
    "potassium_mg": 280.0,
    "protein_g": 5.33,
    "salt_g": 0.775,
    "sat_fat_g": 1.22,
    "sodium_mg": 310.0,
    "sugar_g": 1.78,
    "vitamin_a_ug": 83.0,
    "vitamin_c_mg": 8.7,
    "vitamin_e_mg": 1.7,
    "vitamin_k_ug": 16.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706599",
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
