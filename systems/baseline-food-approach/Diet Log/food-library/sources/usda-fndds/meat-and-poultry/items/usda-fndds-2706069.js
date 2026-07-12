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
  "id": "usda-fndds-2706069",
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
      "gramsPerUnit": 55.0,
      "key": "1-wing-any-size",
      "kind": "unit",
      "label": "1 wing, any size"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken wing, baked, coated",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 3.98,
    "energy_kcal": 260.0,
    "fat_g": 16.9,
    "fibre_g": 0.2,
    "folate_ug": 16.0,
    "iron_mg": 1.03,
    "magnesium_mg": 18.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 136.0,
    "potassium_mg": 193.0,
    "protein_g": 21.4,
    "salt_g": 1.0425,
    "sat_fat_g": 4.64,
    "sodium_mg": 417.0,
    "sugar_g": 0.07,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706069",
  "state": "Baked",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "baked",
    "chicken-whole-pieces",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
