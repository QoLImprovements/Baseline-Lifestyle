/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-pepper-3-1-2-x-3-1-2-x-2",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706633",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-pepper-3-1-2-x-3-1-2-x-2",
      "kind": "unit",
      "label": "1 pepper (3-1/2\" x 3-1/2\" x 2\")"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Stuffed green pepper, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 15.6,
    "energy_kcal": 152.0,
    "fat_g": 5.84,
    "fibre_g": 1.7,
    "folate_ug": 25.0,
    "iron_mg": 1.86,
    "magnesium_mg": 23.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 99.0,
    "potassium_mg": 315.0,
    "protein_g": 8.89,
    "salt_g": 1.83,
    "sat_fat_g": 2.08,
    "sodium_mg": 732.0,
    "sugar_g": 3.48,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 45.7,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706633",
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
