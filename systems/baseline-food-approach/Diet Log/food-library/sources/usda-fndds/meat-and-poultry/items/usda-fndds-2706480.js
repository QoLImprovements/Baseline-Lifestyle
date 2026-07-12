/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-package-prepared",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706480",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 839.0,
      "key": "1-package-prepared",
      "kind": "unit",
      "label": "1 package, prepared"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef and noodles, no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 16.2,
    "energy_kcal": 189.0,
    "fat_g": 8.41,
    "fibre_g": 0.8,
    "folate_ug": 57.0,
    "iron_mg": 1.76,
    "magnesium_mg": 20.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 113.0,
    "potassium_mg": 125.0,
    "protein_g": 11.4,
    "salt_g": 0.9425,
    "sat_fat_g": 2.69,
    "sodium_mg": 377.0,
    "sugar_g": 0.26,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706480",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
