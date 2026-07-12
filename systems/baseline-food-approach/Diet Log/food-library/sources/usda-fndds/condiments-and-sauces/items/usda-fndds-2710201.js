/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-packet",
  "description": "Salad dressings and vegetable oils",
  "id": "usda-fndds-2710201",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "1-packet",
      "kind": "unit",
      "label": "1 packet"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 15.6,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-dipping-size-container",
      "kind": "unit",
      "label": "1 dipping-size container"
    }
  ],
  "name": "French or Catalina dressing",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 18.8,
    "energy_kcal": 419.0,
    "fat_g": 39.1,
    "fibre_g": 2.4,
    "folate_ug": 0.0,
    "iron_mg": 0.32,
    "magnesium_mg": 7.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 25.0,
    "potassium_mg": 108.0,
    "protein_g": 0.87,
    "salt_g": 1.6525,
    "sat_fat_g": 6.09,
    "sodium_mg": 661.0,
    "sugar_g": 17.4,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.0,
    "vitamin_k_ug": 121.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710201",
  "state": "Unspecified",
  "subcategory": "Salad dressings and vegetable oils",
  "tags": [
    "condiments-and-sauces",
    "salad-dressings-and-vegetable-oils",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
