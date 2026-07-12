/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Salad dressings and vegetable oils",
  "id": "usda-fndds-2710216",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-dipping-size-container",
      "kind": "unit",
      "label": "1 dipping-size container"
    },
    {
      "gramsPerUnit": 15.3,
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
      "gramsPerUnit": 44.0,
      "key": "1-packet",
      "kind": "unit",
      "label": "1 packet"
    }
  ],
  "name": "Blue or roquefort cheese dressing, light",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 15.2,
    "energy_kcal": 300.0,
    "fat_g": 26.1,
    "fibre_g": 1.1,
    "folate_ug": 4.0,
    "iron_mg": 0.1,
    "magnesium_mg": 12.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 90.0,
    "potassium_mg": 141.0,
    "protein_g": 1.44,
    "salt_g": 1.82,
    "sat_fat_g": 4.36,
    "sodium_mg": 728.0,
    "sugar_g": 5.46,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 2.16,
    "vitamin_k_ug": 43.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710216",
  "state": "Unspecified",
  "subcategory": "Salad dressings and vegetable oils",
  "tags": [
    "milk-dairy-and-eggs",
    "salad-dressings-and-vegetable-oils",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
