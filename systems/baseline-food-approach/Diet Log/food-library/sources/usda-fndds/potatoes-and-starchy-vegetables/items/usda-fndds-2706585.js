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
  "id": "usda-fndds-2706585",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 131.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Vienna sausages stewed with potatoes, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 13.1,
    "energy_kcal": 219.0,
    "fat_g": 16.4,
    "fibre_g": 1.7,
    "folate_ug": 13.0,
    "iron_mg": 0.99,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 359.0,
    "protein_g": 5.08,
    "salt_g": 1.165,
    "sat_fat_g": 3.82,
    "sodium_mg": 466.0,
    "sugar_g": 1.31,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 16.2,
    "vitamin_e_mg": 2.14,
    "vitamin_k_ug": 11.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706585",
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
