/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-large-thigh",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2706042",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-large-thigh",
      "kind": "unit",
      "label": "1 large thigh"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-thigh-ns-as-to-size",
      "kind": "unit",
      "label": "1 thigh, NS as to size"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-medium-thigh",
      "kind": "unit",
      "label": "1 medium thigh"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-small-thigh",
      "kind": "unit",
      "label": "1 small thigh"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    }
  ],
  "name": "Chicken thigh, grilled with sauce, skin not eaten",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 7.28,
    "energy_kcal": 191.0,
    "fat_g": 8.56,
    "fibre_g": 0.2,
    "folate_ug": 4.0,
    "iron_mg": 1.01,
    "magnesium_mg": 21.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 186.0,
    "potassium_mg": 255.0,
    "protein_g": 19.8,
    "salt_g": 1.4375,
    "sat_fat_g": 2.11,
    "sodium_mg": 575.0,
    "sugar_g": 5.94,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 5.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706042",
  "state": "Grilled",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "chicken-whole-pieces",
    "grilled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
