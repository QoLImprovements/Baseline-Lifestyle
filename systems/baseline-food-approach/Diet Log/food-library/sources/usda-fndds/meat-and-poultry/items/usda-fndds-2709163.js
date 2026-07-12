/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Soy and meat-alternative products",
  "id": "usda-fndds-2709163",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "1-piece-3-x-1-x-3-8",
      "kind": "unit",
      "label": "1 piece (3\" x 1\" x 3/8\")"
    },
    {
      "gramsPerUnit": 146.0,
      "key": "1-cup-cubes",
      "kind": "unit",
      "label": "1 cup, cubes"
    }
  ],
  "name": "Meat substitute, cereal- and vegetable protein-based, fried",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 61.2,
    "energy_kcal": 359.0,
    "fat_g": 7.23,
    "fibre_g": 8.9,
    "folate_ug": 46.0,
    "iron_mg": 4.24,
    "magnesium_mg": 151.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 292.0,
    "potassium_mg": 379.0,
    "protein_g": 12.8,
    "salt_g": 0.705,
    "sat_fat_g": 1.02,
    "sodium_mg": 282.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.77,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709163",
  "state": "Fried",
  "subcategory": "Soy and meat-alternative products",
  "tags": [
    "fried",
    "meat-and-poultry",
    "soy-and-meat-alternative-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
