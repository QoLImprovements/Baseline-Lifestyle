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
  "id": "usda-fndds-2706513",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 305.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Sausage and noodles with cream or white sauce",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 14.8,
    "energy_kcal": 153.0,
    "fat_g": 7.8,
    "fibre_g": 0.6,
    "folate_ug": 40.0,
    "iron_mg": 0.97,
    "magnesium_mg": 16.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 87.0,
    "potassium_mg": 112.0,
    "protein_g": 5.91,
    "salt_g": 0.8975,
    "sat_fat_g": 2.8,
    "sodium_mg": 359.0,
    "sugar_g": 1.67,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706513",
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
