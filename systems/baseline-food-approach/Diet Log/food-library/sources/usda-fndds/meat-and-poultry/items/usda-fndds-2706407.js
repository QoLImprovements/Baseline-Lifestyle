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
  "id": "usda-fndds-2706407",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Guisada, pork",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 2.52,
    "energy_kcal": 118.0,
    "fat_g": 7.09,
    "fibre_g": 0.5,
    "folate_ug": 5.0,
    "iron_mg": 0.79,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 92.0,
    "potassium_mg": 186.0,
    "protein_g": 10.3,
    "salt_g": 0.75,
    "sat_fat_g": 2.62,
    "sodium_mg": 300.0,
    "sugar_g": 0.63,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706407",
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
