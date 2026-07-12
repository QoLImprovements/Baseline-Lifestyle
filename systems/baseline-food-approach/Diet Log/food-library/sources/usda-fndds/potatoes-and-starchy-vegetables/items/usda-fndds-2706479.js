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
  "id": "usda-fndds-2706479",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 166.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 222.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Stewed, seasoned, ground beef with potatoes, Mexican style",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 5.6,
    "energy_kcal": 137.0,
    "fat_g": 7.88,
    "fibre_g": 0.8,
    "folate_ug": 9.0,
    "iron_mg": 1.4,
    "magnesium_mg": 18.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 108.0,
    "potassium_mg": 298.0,
    "protein_g": 10.4,
    "salt_g": 0.8325,
    "sat_fat_g": 2.99,
    "sodium_mg": 333.0,
    "sugar_g": 0.71,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 13.7,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706479",
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
