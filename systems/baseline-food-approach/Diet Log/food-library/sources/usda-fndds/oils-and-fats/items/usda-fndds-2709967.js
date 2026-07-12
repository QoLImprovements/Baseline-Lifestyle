/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-cup",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2709967",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Green peas, fresh, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 14.6,
    "energy_kcal": 102.0,
    "fat_g": 2.68,
    "fibre_g": 5.7,
    "folate_ug": 56.0,
    "iron_mg": 1.48,
    "magnesium_mg": 33.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 109.0,
    "potassium_mg": 247.0,
    "protein_g": 5.48,
    "salt_g": 0.35,
    "sat_fat_g": 1.06,
    "sodium_mg": 140.0,
    "sugar_g": 5.73,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 34.3,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 26.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709967",
  "state": "Cooked",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "cooked",
    "oils-and-fats",
    "other-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
