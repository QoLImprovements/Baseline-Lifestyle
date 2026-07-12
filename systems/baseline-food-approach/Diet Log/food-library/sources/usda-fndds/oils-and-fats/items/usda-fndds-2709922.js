/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-baby-corn",
  "description": "Corn",
  "id": "usda-fndds-2709922",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-baby-corn",
      "kind": "unit",
      "label": "1 baby corn"
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
    }
  ],
  "name": "Corn, canned, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 13.9,
    "energy_kcal": 85.0,
    "fat_g": 3.38,
    "fibre_g": 1.9,
    "folate_ug": 36.0,
    "iron_mg": 0.26,
    "magnesium_mg": 13.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 45.0,
    "potassium_mg": 129.0,
    "protein_g": 2.24,
    "salt_g": 0.54,
    "sat_fat_g": 1.18,
    "sodium_mg": 216.0,
    "sugar_g": 4.32,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709922",
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
