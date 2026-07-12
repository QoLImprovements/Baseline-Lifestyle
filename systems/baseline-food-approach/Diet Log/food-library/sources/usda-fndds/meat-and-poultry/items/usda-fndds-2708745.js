/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cubic-inch",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2708745",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.6,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 67.0,
      "key": "1-piece-2-1-2-x-2-1-2-x-1-1-2",
      "kind": "unit",
      "label": "1 piece (2-1/2\" x 2-1/2\" x 1-1/2\")"
    }
  ],
  "name": "Chicken cornbread",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 9.38,
    "energy_kcal": 167.0,
    "fat_g": 8.21,
    "fibre_g": 0.4,
    "folate_ug": 28.0,
    "iron_mg": 1.04,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 138.0,
    "potassium_mg": 152.0,
    "protein_g": 13.8,
    "salt_g": 1.145,
    "sat_fat_g": 1.91,
    "sodium_mg": 458.0,
    "sugar_g": 0.24,
    "vitamin_a_ug": 73.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708745",
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
