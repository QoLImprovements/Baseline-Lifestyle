/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cubic-inch",
  "description": "Soy and meat-alternative products",
  "id": "usda-fndds-2707435",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.6,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-piece-2-1-2-x-2-3-4-x-1",
      "kind": "unit",
      "label": "1 piece (2-1/2\" x 2-3/4\" x 1\")"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup-1-2-cubes",
      "kind": "unit",
      "label": "1 cup (1/2\" cubes)"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Soybean curd",
  "nutritionPerBasis": {
    "calcium_mg": 111.0,
    "carbs_g": 1.18,
    "energy_kcal": 61.0,
    "fat_g": 3.69,
    "fibre_g": 0.2,
    "folate_ug": 44.0,
    "iron_mg": 1.11,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 92.0,
    "potassium_mg": 120.0,
    "protein_g": 7.17,
    "salt_g": 0.02,
    "sat_fat_g": 0.533,
    "sodium_mg": 8.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707435",
  "state": "Unspecified",
  "subcategory": "Soy and meat-alternative products",
  "tags": [
    "meat-and-poultry",
    "soy-and-meat-alternative-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
