/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-single-serving-box-8-5-fl-oz",
  "description": "Nutritional beverages",
  "id": "usda-fndds-2710721",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 272.0,
      "key": "1-single-serving-box-8-5-fl-oz",
      "kind": "unit",
      "label": "1 single serving box (8.5 fl oz)"
    },
    {
      "gramsPerUnit": 272.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 448.0,
      "key": "1-bottle-14-fl-oz",
      "kind": "unit",
      "label": "1 bottle (14 fl oz)"
    }
  ],
  "name": "Nutritional drink or shake, ready-to-drink, light (Muscle Milk)",
  "nutritionPerBasis": {
    "calcium_mg": 117.0,
    "carbs_g": 2.1,
    "energy_kcal": 38.0,
    "fat_g": 1.15,
    "fibre_g": 0.2,
    "folate_ug": 27.0,
    "iron_mg": 1.15,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 80.0,
    "protein_g": 4.78,
    "salt_g": 0.0675,
    "sat_fat_g": 0.104,
    "sodium_mg": 27.0,
    "sugar_g": 0.38,
    "vitamin_a_ug": 100.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710721",
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
