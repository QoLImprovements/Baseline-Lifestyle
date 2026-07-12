/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-piece",
  "description": "Soy and meat-alternative products",
  "id": "usda-fndds-2707469",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-cup-diced",
      "kind": "unit",
      "label": "1 cup, diced"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "1-cup-pieces",
      "kind": "unit",
      "label": "1 cup, pieces"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken, meatless, breaded, fried",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 8.51,
    "energy_kcal": 234.0,
    "fat_g": 12.8,
    "fibre_g": 4.3,
    "folate_ug": 56.0,
    "iron_mg": 3.83,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 245.0,
    "potassium_mg": 300.0,
    "protein_g": 21.3,
    "salt_g": 1.0,
    "sat_fat_g": 1.13,
    "sodium_mg": 400.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.95,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707469",
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
