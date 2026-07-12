/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-chiliburger",
  "description": "Burgers",
  "id": "usda-fndds-2706947",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-chiliburger",
      "kind": "unit",
      "label": "1 chiliburger"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chiliburger, with or without cheese, on bun",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 17.7,
    "energy_kcal": 232.0,
    "fat_g": 11.0,
    "fibre_g": 1.5,
    "folate_ug": 52.0,
    "iron_mg": 2.53,
    "magnesium_mg": 22.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 130.0,
    "potassium_mg": 243.0,
    "protein_g": 14.8,
    "salt_g": 0.89,
    "sat_fat_g": 4.2,
    "sodium_mg": 356.0,
    "sugar_g": 2.52,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706947",
  "state": "Unspecified",
  "subcategory": "Burgers",
  "tags": [
    "burgers",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
