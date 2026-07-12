/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-eclair-frozen",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708031",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "1-eclair-frozen",
      "kind": "unit",
      "label": "1 eclair, frozen"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "1-eclair-5-x-2-x-1-3-4",
      "kind": "unit",
      "label": "1 eclair (5\" x 2\" x 1-3/4\")"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-tasty-klair-pie",
      "kind": "unit",
      "label": "1 Tasty-Klair pie"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "1-cream-puff-3-1-2-x-2",
      "kind": "unit",
      "label": "1 cream puff (3-1/2\" x 2\")"
    }
  ],
  "name": "Cream puff, eclair, custard or cream filled, iced",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 37.4,
    "energy_kcal": 334.0,
    "fat_g": 18.5,
    "fibre_g": 0.9,
    "folate_ug": 66.0,
    "iron_mg": 0.95,
    "magnesium_mg": 10.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 71.0,
    "potassium_mg": 68.0,
    "protein_g": 4.41,
    "salt_g": 0.6625,
    "sat_fat_g": 7.06,
    "sodium_mg": 265.0,
    "sugar_g": 22.0,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.95,
    "vitamin_k_ug": 6.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708031",
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
