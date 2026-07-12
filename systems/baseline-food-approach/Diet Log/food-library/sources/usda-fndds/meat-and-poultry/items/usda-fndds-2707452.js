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
  "id": "usda-fndds-2707452",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Frozen dessert, non-dairy",
  "nutritionPerBasis": {
    "calcium_mg": 117.0,
    "carbs_g": 18.2,
    "energy_kcal": 159.0,
    "fat_g": 9.27,
    "fibre_g": 0.1,
    "folate_ug": 3.0,
    "iron_mg": 0.26,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 40.0,
    "protein_g": 0.87,
    "salt_g": 0.0975,
    "sat_fat_g": 7.04,
    "sodium_mg": 39.0,
    "sugar_g": 17.5,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.58,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707452",
  "state": "Frozen",
  "subcategory": "Soy and meat-alternative products",
  "tags": [
    "frozen",
    "meat-and-poultry",
    "soy-and-meat-alternative-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
