/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-fl-oz",
  "description": "Nutritional beverages",
  "id": "usda-fndds-2710720",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 544.0,
      "key": "1-single-serving-box-17-fl-oz",
      "kind": "unit",
      "label": "1 single serving box (17 fl oz)"
    },
    {
      "gramsPerUnit": 352.0,
      "key": "1-single-serving-box-11-fl-oz",
      "kind": "unit",
      "label": "1 single serving box (11 fl oz)"
    },
    {
      "gramsPerUnit": 352.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 448.0,
      "key": "1-bottle-14-fl-oz",
      "kind": "unit",
      "label": "1 bottle (14 fl oz)"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Nutritional drink or shake, ready-to-drink (Muscle Milk)",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 2.28,
    "energy_kcal": 52.0,
    "fat_g": 2.17,
    "fibre_g": 0.2,
    "folate_ug": 33.0,
    "iron_mg": 1.3,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 101.0,
    "potassium_mg": 198.0,
    "protein_g": 5.87,
    "salt_g": 0.2375,
    "sat_fat_g": 0.362,
    "sodium_mg": 95.0,
    "sugar_g": 0.78,
    "vitamin_a_ug": 88.0,
    "vitamin_c_mg": 27.6,
    "vitamin_e_mg": 0.83,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710720",
  "state": "Unspecified",
  "subcategory": "Nutritional beverages",
  "tags": [
    "milk-dairy-and-eggs",
    "nutritional-beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
