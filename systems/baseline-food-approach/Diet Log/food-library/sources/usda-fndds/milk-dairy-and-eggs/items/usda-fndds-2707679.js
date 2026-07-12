/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2707679",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-croissant",
      "kind": "unit",
      "label": "1 croissant"
    }
  ],
  "name": "Croissant, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 47.0,
    "energy_kcal": 414.0,
    "fat_g": 20.9,
    "fibre_g": 2.6,
    "folate_ug": 74.0,
    "iron_mg": 2.15,
    "magnesium_mg": 24.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 130.0,
    "potassium_mg": 132.0,
    "protein_g": 9.2,
    "salt_g": 0.9025,
    "sat_fat_g": 10.6,
    "sodium_mg": 361.0,
    "sugar_g": 11.4,
    "vitamin_a_ug": 204.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.44,
    "vitamin_k_ug": 10.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707679",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
