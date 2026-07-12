/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2709971",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Green peas, canned, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 11.0,
    "energy_kcal": 86.0,
    "fat_g": 2.97,
    "fibre_g": 4.8,
    "folate_ug": 29.0,
    "iron_mg": 1.15,
    "magnesium_mg": 18.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 66.0,
    "potassium_mg": 104.0,
    "protein_g": 4.36,
    "salt_g": 0.705,
    "sat_fat_g": 1.09,
    "sodium_mg": 282.0,
    "sugar_g": 2.91,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 37.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709971",
  "state": "Canned",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "canned",
    "oils-and-fats",
    "other-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
