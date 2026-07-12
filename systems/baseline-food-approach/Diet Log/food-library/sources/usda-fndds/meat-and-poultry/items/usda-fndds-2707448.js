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
  "id": "usda-fndds-2707448",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz",
      "kind": "unit",
      "label": "1 oz"
    }
  ],
  "name": "Soybean curd, deep fried",
  "nutritionPerBasis": {
    "calcium_mg": 372.0,
    "carbs_g": 8.86,
    "energy_kcal": 270.0,
    "fat_g": 20.2,
    "fibre_g": 3.9,
    "folate_ug": 27.0,
    "iron_mg": 4.87,
    "magnesium_mg": 60.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 287.0,
    "potassium_mg": 146.0,
    "protein_g": 18.8,
    "salt_g": 0.04,
    "sat_fat_g": 2.92,
    "sodium_mg": 16.0,
    "sugar_g": 2.72,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707448",
  "state": "Deep-fried",
  "subcategory": "Soy and meat-alternative products",
  "tags": [
    "deep-fried",
    "meat-and-poultry",
    "soy-and-meat-alternative-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
