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
  "id": "usda-fndds-2706747",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 163.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 217.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pepper steak",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 4.34,
    "energy_kcal": 145.0,
    "fat_g": 9.12,
    "fibre_g": 0.7,
    "folate_ug": 13.0,
    "iron_mg": 1.24,
    "magnesium_mg": 16.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 89.0,
    "potassium_mg": 202.0,
    "protein_g": 11.9,
    "salt_g": 0.61,
    "sat_fat_g": 2.01,
    "sodium_mg": 244.0,
    "sugar_g": 1.67,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 22.6,
    "vitamin_e_mg": 1.43,
    "vitamin_k_ug": 19.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706747",
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
