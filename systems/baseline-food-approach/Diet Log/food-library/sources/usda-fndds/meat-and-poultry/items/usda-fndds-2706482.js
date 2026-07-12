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
  "id": "usda-fndds-2706482",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1245.0,
      "key": "1-package-prepared",
      "kind": "unit",
      "label": "1 package, prepared"
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
  "name": "Beef and noodles with tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 10.7,
    "energy_kcal": 115.0,
    "fat_g": 3.93,
    "fibre_g": 0.4,
    "folate_ug": 12.0,
    "iron_mg": 1.17,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 68.0,
    "potassium_mg": 114.0,
    "protein_g": 8.74,
    "salt_g": 0.685,
    "sat_fat_g": 1.54,
    "sodium_mg": 274.0,
    "sugar_g": 2.02,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706482",
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
