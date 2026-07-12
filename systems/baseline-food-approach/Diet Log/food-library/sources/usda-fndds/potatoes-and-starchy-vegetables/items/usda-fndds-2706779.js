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
  "id": "usda-fndds-2706779",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 202.0,
      "key": "1-shishkabob",
      "kind": "unit",
      "label": "1 shishkabob"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pork shish kabob with vegetables, excluding potatoes",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 5.06,
    "energy_kcal": 124.0,
    "fat_g": 5.17,
    "fibre_g": 0.8,
    "folate_ug": 13.0,
    "iron_mg": 0.66,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 138.0,
    "potassium_mg": 316.0,
    "protein_g": 13.9,
    "salt_g": 0.54,
    "sat_fat_g": 1.7,
    "sodium_mg": 216.0,
    "sugar_g": 2.37,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 15.3,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 4.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706779",
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
