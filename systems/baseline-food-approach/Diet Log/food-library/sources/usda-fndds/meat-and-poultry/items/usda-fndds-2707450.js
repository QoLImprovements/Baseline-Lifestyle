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
  "id": "usda-fndds-2707450",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Vermicelli, made from soybeans",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 31.4,
    "energy_kcal": 126.0,
    "fat_g": 0.04,
    "fibre_g": 1.5,
    "folate_ug": 0.0,
    "iron_mg": 0.52,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 6.0,
    "potassium_mg": 0.0,
    "protein_g": 0.04,
    "salt_g": 0.0075,
    "sat_fat_g": 0.005,
    "sodium_mg": 3.0,
    "sugar_g": 6.66,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707450",
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
