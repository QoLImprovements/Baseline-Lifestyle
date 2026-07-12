/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-cup",
  "description": "Salad dressings and vegetable oils",
  "id": "usda-fndds-2710218",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 16.2,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-dipping-size-container",
      "kind": "unit",
      "label": "1 dipping-size container"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "1-packet",
      "kind": "unit",
      "label": "1 packet"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "French or Catalina dressing, light",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 31.2,
    "energy_kcal": 222.0,
    "fat_g": 11.5,
    "fibre_g": 1.5,
    "folate_ug": 2.0,
    "iron_mg": 0.73,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 107.0,
    "protein_g": 0.58,
    "salt_g": 2.095,
    "sat_fat_g": 0.842,
    "sodium_mg": 838.0,
    "sugar_g": 16.9,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 4.8,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 17.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710218",
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
