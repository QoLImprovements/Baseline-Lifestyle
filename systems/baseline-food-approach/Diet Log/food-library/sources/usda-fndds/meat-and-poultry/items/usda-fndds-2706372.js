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
  "id": "usda-fndds-2706372",
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
  "name": "Guisada, beef",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 2.52,
    "energy_kcal": 115.0,
    "fat_g": 6.62,
    "fibre_g": 0.5,
    "folate_ug": 8.0,
    "iron_mg": 1.08,
    "magnesium_mg": 12.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 91.0,
    "potassium_mg": 188.0,
    "protein_g": 10.8,
    "salt_g": 0.7625,
    "sat_fat_g": 2.55,
    "sodium_mg": 305.0,
    "sugar_g": 0.63,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706372",
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
