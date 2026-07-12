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
  "id": "usda-fndds-2706721",
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
  "name": "Stew, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 6.29,
    "energy_kcal": 99.0,
    "fat_g": 4.11,
    "fibre_g": 1.3,
    "folate_ug": 14.0,
    "iron_mg": 0.8,
    "magnesium_mg": 17.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 88.0,
    "potassium_mg": 253.0,
    "protein_g": 8.93,
    "salt_g": 0.77,
    "sat_fat_g": 1.48,
    "sodium_mg": 308.0,
    "sugar_g": 1.57,
    "vitamin_a_ug": 131.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 6.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706721",
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
