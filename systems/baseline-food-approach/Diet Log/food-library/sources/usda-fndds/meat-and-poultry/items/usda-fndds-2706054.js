/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-small-thigh",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2706054",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 110.0,
      "key": "1-medium-thigh",
      "kind": "unit",
      "label": "1 medium thigh"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-large-thigh",
      "kind": "unit",
      "label": "1 large thigh"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken thigh, baked, coated, skin / coating eaten",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 3.98,
    "energy_kcal": 240.0,
    "fat_g": 15.0,
    "fibre_g": 0.2,
    "folate_ug": 12.0,
    "iron_mg": 1.24,
    "magnesium_mg": 21.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 196.0,
    "potassium_mg": 229.0,
    "protein_g": 21.0,
    "salt_g": 1.05,
    "sat_fat_g": 3.89,
    "sodium_mg": 420.0,
    "sugar_g": 0.07,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706054",
  "state": "Baked",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "baked",
    "chicken-whole-pieces",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
