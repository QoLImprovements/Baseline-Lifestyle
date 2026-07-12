/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2706077",
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
      "gramsPerUnit": 35.0,
      "key": "1-drummette",
      "kind": "unit",
      "label": "1 drummette"
    }
  ],
  "name": "Chicken \"wings\" with other sauces or seasoning, from other sources",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 12.0,
    "energy_kcal": 271.0,
    "fat_g": 17.2,
    "fibre_g": 0.2,
    "folate_ug": 11.0,
    "iron_mg": 0.87,
    "magnesium_mg": 20.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 185.0,
    "potassium_mg": 259.0,
    "protein_g": 17.2,
    "salt_g": 1.8275,
    "sat_fat_g": 4.06,
    "sodium_mg": 731.0,
    "sugar_g": 7.62,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706077",
  "state": "Unspecified",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "chicken-whole-pieces",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
