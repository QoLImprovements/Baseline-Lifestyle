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
  "id": "usda-fndds-2706078",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-drummette",
      "kind": "unit",
      "label": "1 drummette"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken \"wings\", plain, from other sources",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 12.6,
    "energy_kcal": 314.0,
    "fat_g": 21.1,
    "fibre_g": 0.3,
    "folate_ug": 29.0,
    "iron_mg": 1.25,
    "magnesium_mg": 20.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 167.0,
    "potassium_mg": 206.0,
    "protein_g": 18.0,
    "salt_g": 1.8225,
    "sat_fat_g": 4.92,
    "sodium_mg": 729.0,
    "sugar_g": 0.11,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.7,
    "vitamin_k_ug": 6.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706078",
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
