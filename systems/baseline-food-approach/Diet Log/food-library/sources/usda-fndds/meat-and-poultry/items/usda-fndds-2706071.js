/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-drummette",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2706071",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-drummette",
      "kind": "unit",
      "label": "1 drummette"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken \"wings\" with other sauces or seasoning, from fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 13.1,
    "energy_kcal": 276.0,
    "fat_g": 17.4,
    "fibre_g": 0.2,
    "folate_ug": 12.0,
    "iron_mg": 0.88,
    "magnesium_mg": 20.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 182.0,
    "potassium_mg": 257.0,
    "protein_g": 17.0,
    "salt_g": 1.9025,
    "sat_fat_g": 4.14,
    "sodium_mg": 761.0,
    "sugar_g": 7.55,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.05,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706071",
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
