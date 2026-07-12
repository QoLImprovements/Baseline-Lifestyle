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
  "id": "usda-fndds-2706075",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-drummette",
      "kind": "unit",
      "label": "1 drummette"
    }
  ],
  "name": "Chicken \"wings\", plain, from precooked",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 7.15,
    "energy_kcal": 294.0,
    "fat_g": 20.6,
    "fibre_g": 0.3,
    "folate_ug": 21.0,
    "iron_mg": 1.16,
    "magnesium_mg": 17.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 122.0,
    "potassium_mg": 170.0,
    "protein_g": 18.6,
    "salt_g": 1.1525,
    "sat_fat_g": 4.77,
    "sodium_mg": 461.0,
    "sugar_g": 0.12,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.03,
    "vitamin_k_ug": 8.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706075",
  "state": "Cooked",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "chicken-whole-pieces",
    "cooked",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
