/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-shishkabob",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706780",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 202.0,
      "key": "1-shishkabob",
      "kind": "unit",
      "label": "1 shishkabob"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Lamb shish kabob with vegetables, excluding potatoes",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 5.06,
    "energy_kcal": 162.0,
    "fat_g": 10.3,
    "fibre_g": 0.8,
    "folate_ug": 20.0,
    "iron_mg": 1.02,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 111.0,
    "potassium_mg": 265.0,
    "protein_g": 12.0,
    "salt_g": 0.555,
    "sat_fat_g": 4.1,
    "sodium_mg": 222.0,
    "sugar_g": 2.37,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 6.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706780",
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
