/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706725",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Stewed tripe, with potatoes, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 9.49,
    "energy_kcal": 109.0,
    "fat_g": 4.05,
    "fibre_g": 1.6,
    "folate_ug": 32.0,
    "iron_mg": 0.84,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 272.0,
    "protein_g": 8.56,
    "salt_g": 1.4025,
    "sat_fat_g": 0.968,
    "sodium_mg": 561.0,
    "sugar_g": 2.03,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 17.1,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706725",
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
