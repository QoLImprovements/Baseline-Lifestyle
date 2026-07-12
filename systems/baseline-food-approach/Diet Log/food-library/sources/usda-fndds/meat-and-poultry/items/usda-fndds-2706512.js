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
  "id": "usda-fndds-2706512",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 305.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Sausage and rice with cheese sauce",
  "nutritionPerBasis": {
    "calcium_mg": 88.0,
    "carbs_g": 13.9,
    "energy_kcal": 151.0,
    "fat_g": 7.61,
    "fibre_g": 0.2,
    "folate_ug": 28.0,
    "iron_mg": 0.77,
    "magnesium_mg": 13.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 98.0,
    "potassium_mg": 97.0,
    "protein_g": 6.32,
    "salt_g": 0.9325,
    "sat_fat_g": 3.3,
    "sodium_mg": 373.0,
    "sugar_g": 0.22,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706512",
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
