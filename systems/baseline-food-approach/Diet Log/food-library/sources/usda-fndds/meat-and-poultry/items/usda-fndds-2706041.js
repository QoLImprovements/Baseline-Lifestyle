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
  "id": "usda-fndds-2706041",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-large-thigh",
      "kind": "unit",
      "label": "1 large thigh"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-medium-thigh",
      "kind": "unit",
      "label": "1 medium thigh"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-small-thigh",
      "kind": "unit",
      "label": "1 small thigh"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-thigh-ns-as-to-size",
      "kind": "unit",
      "label": "1 thigh, NS as to size"
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
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken thigh, grilled with sauce, skin eaten",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 7.28,
    "energy_kcal": 233.0,
    "fat_g": 13.8,
    "fibre_g": 0.2,
    "folate_ug": 4.0,
    "iron_mg": 0.98,
    "magnesium_mg": 20.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 175.0,
    "potassium_mg": 242.0,
    "protein_g": 18.6,
    "salt_g": 1.4275,
    "sat_fat_g": 3.54,
    "sodium_mg": 571.0,
    "sugar_g": 5.94,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706041",
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
