/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706878",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Stewed gizzards, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 4.41,
    "energy_kcal": 179.0,
    "fat_g": 8.69,
    "fibre_g": 1.1,
    "folate_ug": 11.0,
    "iron_mg": 2.52,
    "magnesium_mg": 11.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 138.0,
    "potassium_mg": 239.0,
    "protein_g": 20.3,
    "salt_g": 0.95,
    "sat_fat_g": 1.74,
    "sodium_mg": 380.0,
    "sugar_g": 1.94,
    "vitamin_a_ug": 79.0,
    "vitamin_c_mg": 6.2,
    "vitamin_e_mg": 1.12,
    "vitamin_k_ug": 17.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706878",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "meat-and-poultry",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
