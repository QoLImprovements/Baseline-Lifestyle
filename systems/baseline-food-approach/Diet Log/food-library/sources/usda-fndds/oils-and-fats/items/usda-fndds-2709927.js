/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "quantity-not-specified",
  "description": "Corn",
  "id": "usda-fndds-2709927",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-baby-corn",
      "kind": "unit",
      "label": "1 baby corn"
    }
  ],
  "name": "Corn, canned, reduced sodium, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 14.5,
    "energy_kcal": 85.0,
    "fat_g": 3.16,
    "fibre_g": 1.8,
    "folate_ug": 38.0,
    "iron_mg": 0.38,
    "magnesium_mg": 16.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 49.0,
    "potassium_mg": 143.0,
    "protein_g": 2.05,
    "salt_g": 0.0775,
    "sat_fat_g": 1.1,
    "sodium_mg": 31.0,
    "sugar_g": 4.34,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709927",
  "state": "Canned",
  "subcategory": "Corn",
  "tags": [
    "canned",
    "corn",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
