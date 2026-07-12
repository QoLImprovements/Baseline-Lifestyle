/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cream-puff-3-1-2-x-2",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708029",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "1-cream-puff-3-1-2-x-2",
      "kind": "unit",
      "label": "1 cream puff (3-1/2\" x 2\")"
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
    }
  ],
  "name": "Cream puff, eclair, custard or cream filled, NS as to icing",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 11.0,
    "energy_kcal": 280.0,
    "fat_g": 24.4,
    "fibre_g": 0.3,
    "folate_ug": 28.0,
    "iron_mg": 0.89,
    "magnesium_mg": 8.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 68.0,
    "potassium_mg": 79.0,
    "protein_g": 4.2,
    "salt_g": 0.33,
    "sat_fat_g": 13.3,
    "sodium_mg": 132.0,
    "sugar_g": 2.38,
    "vitamin_a_ug": 238.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708029",
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
