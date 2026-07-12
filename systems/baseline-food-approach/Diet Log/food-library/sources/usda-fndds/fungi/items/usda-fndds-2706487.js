/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706487",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 311.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef and noodles with mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 15.0,
    "energy_kcal": 136.0,
    "fat_g": 5.14,
    "fibre_g": 0.8,
    "folate_ug": 44.0,
    "iron_mg": 1.16,
    "magnesium_mg": 15.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 84.0,
    "potassium_mg": 91.0,
    "protein_g": 7.54,
    "salt_g": 0.775,
    "sat_fat_g": 1.26,
    "sodium_mg": 310.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 7.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706487",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "fungi",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
