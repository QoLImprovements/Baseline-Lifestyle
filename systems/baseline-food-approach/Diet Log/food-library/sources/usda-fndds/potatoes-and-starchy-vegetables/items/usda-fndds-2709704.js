/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other red and orange vegetables",
  "id": "usda-fndds-2709704",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Sweet potato, candied",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 37.7,
    "energy_kcal": 187.0,
    "fat_g": 3.48,
    "fibre_g": 2.2,
    "folate_ug": 7.0,
    "iron_mg": 0.31,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 362.0,
    "protein_g": 1.18,
    "salt_g": 0.3025,
    "sat_fat_g": 0.83,
    "sodium_mg": 121.0,
    "sugar_g": 29.4,
    "vitamin_a_ug": 514.0,
    "vitamin_c_mg": 9.3,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709704",
  "state": "Unspecified",
  "subcategory": "Other red and orange vegetables",
  "tags": [
    "other-red-and-orange-vegetables",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
