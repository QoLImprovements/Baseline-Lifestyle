/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706593",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Stew, beef, with pasta",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 10.8,
    "energy_kcal": 132.0,
    "fat_g": 5.23,
    "fibre_g": 1.1,
    "folate_ug": 27.0,
    "iron_mg": 1.18,
    "magnesium_mg": 15.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 88.0,
    "potassium_mg": 184.0,
    "protein_g": 9.76,
    "salt_g": 0.7475,
    "sat_fat_g": 1.96,
    "sodium_mg": 299.0,
    "sugar_g": 0.92,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706593",
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
