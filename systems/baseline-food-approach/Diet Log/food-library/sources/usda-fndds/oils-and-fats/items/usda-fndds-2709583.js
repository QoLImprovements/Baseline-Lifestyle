/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-cup",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709583",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Collards, fresh, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 242.0,
    "carbs_g": 5.65,
    "energy_kcal": 54.0,
    "fat_g": 2.99,
    "fibre_g": 4.2,
    "folate_ug": 101.0,
    "iron_mg": 0.49,
    "magnesium_mg": 28.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 27.0,
    "potassium_mg": 222.0,
    "protein_g": 3.16,
    "salt_g": 0.3925,
    "sat_fat_g": 1.07,
    "sodium_mg": 157.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 273.0,
    "vitamin_c_mg": 25.7,
    "vitamin_e_mg": 2.58,
    "vitamin_k_ug": 456.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709583",
  "state": "Cooked",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "cooked",
    "oils-and-fats",
    "other-dark-green-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
