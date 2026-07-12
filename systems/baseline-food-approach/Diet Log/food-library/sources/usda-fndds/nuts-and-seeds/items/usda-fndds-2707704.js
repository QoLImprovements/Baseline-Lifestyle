/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "quantity-not-specified",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2707704",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    }
  ],
  "name": "Pannetone",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 53.8,
    "energy_kcal": 325.0,
    "fat_g": 8.39,
    "fibre_g": 2.3,
    "folate_ug": 128.0,
    "iron_mg": 2.86,
    "magnesium_mg": 24.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 127.0,
    "potassium_mg": 165.0,
    "protein_g": 9.76,
    "salt_g": 0.8125,
    "sat_fat_g": 3.99,
    "sodium_mg": 325.0,
    "sugar_g": 17.8,
    "vitamin_a_ug": 73.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707704",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
