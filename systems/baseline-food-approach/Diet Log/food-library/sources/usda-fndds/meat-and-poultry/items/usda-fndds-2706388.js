/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706388",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef curry",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 6.53,
    "energy_kcal": 113.0,
    "fat_g": 6.57,
    "fibre_g": 1.4,
    "folate_ug": 16.0,
    "iron_mg": 1.15,
    "magnesium_mg": 17.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 76.0,
    "potassium_mg": 288.0,
    "protein_g": 7.57,
    "salt_g": 0.8975,
    "sat_fat_g": 1.79,
    "sodium_mg": 359.0,
    "sugar_g": 2.56,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 8.9,
    "vitamin_e_mg": 1.38,
    "vitamin_k_ug": 9.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706388",
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
