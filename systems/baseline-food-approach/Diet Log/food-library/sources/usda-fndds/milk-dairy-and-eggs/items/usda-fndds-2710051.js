/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2710051",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Eggplant with cheese and tomato sauce",
  "nutritionPerBasis": {
    "calcium_mg": 164.0,
    "carbs_g": 6.34,
    "energy_kcal": 90.0,
    "fat_g": 4.84,
    "fibre_g": 2.2,
    "folate_ug": 18.0,
    "iron_mg": 0.45,
    "magnesium_mg": 19.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 138.0,
    "potassium_mg": 246.0,
    "protein_g": 6.16,
    "salt_g": 0.8125,
    "sat_fat_g": 2.67,
    "sodium_mg": 325.0,
    "sugar_g": 3.39,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710051",
  "state": "Unspecified",
  "subcategory": "Vegetable dishes",
  "tags": [
    "milk-dairy-and-eggs",
    "unspecified",
    "vegetable-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
