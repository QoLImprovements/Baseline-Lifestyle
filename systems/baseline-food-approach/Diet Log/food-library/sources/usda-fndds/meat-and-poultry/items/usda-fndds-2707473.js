/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Soy and meat-alternative products",
  "id": "usda-fndds-2707473",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-patty",
      "kind": "unit",
      "label": "1 patty"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Veggie burger patty, no bun",
  "nutritionPerBasis": {
    "calcium_mg": 136.0,
    "carbs_g": 14.3,
    "energy_kcal": 177.0,
    "fat_g": 6.3,
    "fibre_g": 4.9,
    "folate_ug": 124.0,
    "iron_mg": 2.41,
    "magnesium_mg": 56.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 206.0,
    "potassium_mg": 333.0,
    "protein_g": 15.7,
    "salt_g": 1.4225,
    "sat_fat_g": 1.44,
    "sodium_mg": 569.0,
    "sugar_g": 1.07,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 4.5,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707473",
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
